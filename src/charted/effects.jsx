import { useEffect, useRef, useState } from 'react'

/* ════════════════════════════════════════════════════════════════════
 * Charted — Visual Effects Library
 * --------------------------------------------------------------------
 * All animation primitives live in one file so they're easy to discover
 * and tune together. No external animation libs (framer-motion, GSAP)
 * — just rAF + IntersectionObserver + transform/opacity.
 *
 * Performance budget: each effect must hit 60fps on iPhone 12 / M1 Air.
 * Accessibility: every effect honors prefers-reduced-motion.
 * ════════════════════════════════════════════════════════════════════ */

const REDUCED = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* ────────────────────────────────────────────────────────────
 * Hook: useReveal
 * Adds .is-revealed to any .c-reveal child when entering viewport.
 * Disconnects after triggering (one-shot, no memory drag).
 *
 * Co-locating hooks with components in this single utility file is
 * intentional — they share the REDUCED helper. Fast Refresh drift
 * across the file isn't a meaningful concern for animation utils.
 * ──────────────────────────────────────────────────────────── */
// eslint-disable-next-line react-refresh/only-export-components
export function useReveal({ threshold = 0.1, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('.c-reveal')
    if (REDUCED()) {
      targets.forEach((n) => n.classList.add('is-revealed'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed')
            io.unobserve(e.target)
          }
        })
      },
      { threshold, rootMargin },
    )
    targets.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [threshold, rootMargin])
  return ref
}

/* ────────────────────────────────────────────────────────────
 * Hook: useScrollProgress
 * Returns a normalized [0,1] scroll progress for the wrapped element
 * — measured from when its top hits viewport bottom to when its
 * bottom leaves viewport top. Useful for parallax / scroll-driven
 * scenes (e.g., shrink/fade Hero as user scrolls).
 * ──────────────────────────────────────────────────────────── */
// eslint-disable-next-line react-refresh/only-export-components
export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const el = ref?.current
    if (!el) return
    let rafId = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = r.height + vh
      const passed = vh - r.top
      const p = Math.max(0, Math.min(1, passed / total))
      setProgress(p)
      rafId = 0
    }
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [ref])
  return progress
}

/* ────────────────────────────────────────────────────────────
 * Component: TextReveal
 *
 * Splits text into per-character spans (or per-word, if word=true)
 * and reveals them with a staggered fade+slide on viewport entry.
 *
 * Props:
 *   text:    string to animate
 *   word:    split by word instead of char (faster on long text)
 *   delay:   base delay (ms) before first character animates
 *   stagger: per-char/word delay (ms)
 *   tag:     element tag (default: span)
 *
 * Implementation: each char span gets --i (its index) as inline style,
 * and CSS uses calc(var(--stagger) * var(--i)) for delay.
 * ──────────────────────────────────────────────────────────── */
export function TextReveal({
  text,
  word = false,
  delay = 0,
  stagger = 22,
  tag: Tag = 'span',
  className = '',
}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (REDUCED()) {
      el.classList.add('is-revealed')
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed')
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [text])

  const tokens = word ? text.split(/(\s+)/) : Array.from(text)

  return (
    <Tag
      ref={ref}
      className={`c-text-reveal ${className}`}
      style={{ '--c-stagger': `${stagger}ms`, '--c-base-delay': `${delay}ms` }}
      aria-label={text}
    >
      {tokens.map((t, i) => (
        <span
          key={i}
          className={t.match(/^\s+$/) ? 'c-tr-space' : 'c-tr-char'}
          style={{ '--i': i }}
          aria-hidden="true"
        >
          {t === ' ' ? ' ' : t}
        </span>
      ))}
    </Tag>
  )
}

/* ────────────────────────────────────────────────────────────
 * Component: PhoneTilt
 *
 * Wraps a phone mockup. On mouse hover, the inside element tilts
 * to follow the cursor (3D perspective). On leave, eases back to
 * neutral. Disabled on touch / reduced-motion.
 *
 * Children should be a self-contained phone frame (img + chrome).
 * ──────────────────────────────────────────────────────────── */
export function PhoneTilt({ children, className = '', max = 10 }) {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const el = wrapRef.current
    const inner = innerRef.current
    if (!el || !inner) return
    if (REDUCED() || window.matchMedia('(hover: none)').matches) return

    // Local mutable state — no refs needed since we don't share with React
    let rafId = 0
    const target = { rx: 0, ry: 0 }
    const cur = { rx: 0, ry: 0 }

    const animate = () => {
      const k = 0.12
      cur.rx += (target.rx - cur.rx) * k
      cur.ry += (target.ry - cur.ry) * k
      inner.style.transform = `perspective(900px) rotateX(${cur.rx}deg) rotateY(${cur.ry}deg)`
      const dx = Math.abs(target.rx - cur.rx)
      const dy = Math.abs(target.ry - cur.ry)
      if (dx > 0.02 || dy > 0.02) {
        rafId = requestAnimationFrame(animate)
      } else {
        rafId = 0
      }
    }

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      target.ry = (px - 0.5) * (max * 2)
      target.rx = -(py - 0.5) * (max * 2)
      if (!rafId) rafId = requestAnimationFrame(animate)
    }
    const onLeave = () => {
      target.rx = 0
      target.ry = 0
      if (!rafId) rafId = requestAnimationFrame(animate)
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [max])

  return (
    <div ref={wrapRef} className={`c-tilt ${className}`}>
      <div ref={innerRef} className="c-tilt-inner">
        {children}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
 * Component: GlobeCanvas
 *
 * A vanilla-canvas 3D globe. Wireframe sphere with lat/long
 * meridians, glowing pins on real city coordinates, and great-
 * circle arcs that arch above the surface. Auto-rotates.
 *
 * Why canvas (not SVG / three.js)?
 *  - SVG: too many path nodes for smooth rotation
 *  - three.js: ~600KB gzipped, total overkill
 *  - canvas: ~6KB, 60fps on every device since 2015
 * ──────────────────────────────────────────────────────────── */

// Real cities so the globe feels like a traveler's globe, not a demo
const PINS = [
  { lon: 139.69, lat: 35.69 },   // Tokyo
  { lon: -74.01, lat: 40.71 },   // NYC
  { lon: 2.35,   lat: 48.86 },   // Paris
  { lon: -0.13,  lat: 51.51 },   // London
  { lon: 151.21, lat: -33.87 },  // Sydney
  { lon: -122.42,lat: 37.78 },   // San Francisco
  { lon: -21.94, lat: 64.13 },   // Reykjavik
  { lon: 18.42,  lat: -33.92 },  // Cape Town
  { lon: 103.82, lat: 1.35 },    // Singapore
  { lon: -99.13, lat: 19.43 },   // Mexico City
  { lon: 72.88,  lat: 19.08 },   // Mumbai
  { lon: 31.24,  lat: 30.04 },   // Cairo
  { lon: 116.40, lat: 39.90 },   // Beijing
  { lon: -43.17, lat: -22.91 },  // Rio
]

// Pre-defined arcs (great circles) — like flight paths a traveler accumulates
const ARCS = [
  [0, 5],   // Tokyo–SF
  [0, 1],   // Tokyo–NYC (polar route)
  [1, 2],   // NYC–Paris
  [2, 3],   // Paris–London
  [3, 6],   // London–Reykjavik
  [4, 8],   // Sydney–Singapore
  [5, 9],   // SF–Mexico
  [10, 11], // Mumbai–Cairo
  [12, 0],  // Beijing–Tokyo
  [13, 1],  // Rio–NYC
  [7, 11],  // Cape Town–Cairo
  [11, 2],  // Cairo–Paris
]

function lonlatTo3D(lon, lat, rotY) {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((lon + rotY) * Math.PI) / 180
  return [
    Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  ]
}

function slerp(p1, p2, t) {
  const dot = Math.max(-1, Math.min(1, p1[0]*p2[0] + p1[1]*p2[1] + p1[2]*p2[2]))
  const omega = Math.acos(dot)
  if (omega < 0.0001) return p1
  const sinO = Math.sin(omega)
  const a = Math.sin((1 - t) * omega) / sinO
  const b = Math.sin(t * omega) / sinO
  return [
    a * p1[0] + b * p2[0],
    a * p1[1] + b * p2[1],
    a * p1[2] + b * p2[2],
  ]
}

export function GlobeCanvas({ size = 540, className = '' }) {
  const canvasRef = useRef(null)
  const stateRef = useRef({
    rotY: -20,
    speed: 0.012,         // base rotation: ~30° per second
    targetSpeed: 0.012,
    arcPhase: 0,          // 0..1 cycle for arc draw-on animation
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const reduced = REDUCED()
    const radius = size * 0.40
    const cx = size / 2
    const cy = size / 2
    let rafId = 0
    let lastT = 0
    let arcT = 0

    function draw(t) {
      if (!lastT) lastT = t
      const dt = Math.min(t - lastT, 50)
      lastT = t

      const s = stateRef.current
      // Smooth toward target speed (so hover speed-up eases in/out)
      s.speed += (s.targetSpeed - s.speed) * 0.06
      if (!reduced) s.rotY += dt * s.speed
      arcT = (arcT + dt * 0.0003) % 1

      ctx.clearRect(0, 0, size, size)

      /* — Outer halo — */
      const halo = ctx.createRadialGradient(cx, cy, radius * 0.92, cx, cy, radius * 1.45)
      halo.addColorStop(0, 'rgba(56, 189, 248, 0.22)')
      halo.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)')
      halo.addColorStop(1, 'rgba(56, 189, 248, 0)')
      ctx.fillStyle = halo
      ctx.fillRect(0, 0, size, size)

      /* — Globe body (gradient sphere) — */
      const body = ctx.createRadialGradient(
        cx - radius * 0.35, cy - radius * 0.35, radius * 0.05,
        cx, cy, radius
      )
      body.addColorStop(0, '#1e3a5f')
      body.addColorStop(0.45, '#0e1f38')
      body.addColorStop(0.85, '#06101e')
      body.addColorStop(1, '#02060d')
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fillStyle = body
      ctx.fill()

      /* — Latitude lines — */
      ctx.lineWidth = 0.8
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath()
        let started = false
        for (let lon = -180; lon <= 180; lon += 4) {
          const p = lonlatTo3D(lon, lat, s.rotY)
          if (p[2] > -0.02) {
            const x = cx + p[0] * radius
            const y = cy - p[1] * radius
            // Edge fade: opacity drops as point approaches limb
            const edgeFade = Math.max(0, p[2] + 0.5)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.16 * edgeFade})`
            if (!started) { ctx.moveTo(x, y); started = true }
            else ctx.lineTo(x, y)
          } else if (started) {
            ctx.stroke()
            ctx.beginPath()
            started = false
          }
        }
        if (started) ctx.stroke()
      }

      /* — Longitude lines — */
      for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath()
        let started = false
        for (let lat = -90; lat <= 90; lat += 4) {
          const p = lonlatTo3D(lon, lat, s.rotY)
          if (p[2] > -0.02) {
            const x = cx + p[0] * radius
            const y = cy - p[1] * radius
            const edgeFade = Math.max(0, p[2] + 0.5)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.14 * edgeFade})`
            if (!started) { ctx.moveTo(x, y); started = true }
            else ctx.lineTo(x, y)
          } else if (started) {
            ctx.stroke()
            ctx.beginPath()
            started = false
          }
        }
        if (started) ctx.stroke()
      }

      /* — Arcs (great-circle, arched above surface) — */
      ARCS.forEach(([ai, bi], idx) => {
        const a = lonlatTo3D(PINS[ai].lon, PINS[ai].lat, s.rotY)
        const b = lonlatTo3D(PINS[bi].lon, PINS[bi].lat, s.rotY)
        const N = 36
        // Each arc has its own draw-progress phase for a subtle "drawing in" feel
        const prog = ((arcT * 4 + idx * 0.13) % 1.4)
        const drawTo = Math.min(1, prog)
        if (drawTo <= 0) return
        ctx.beginPath()
        let started = false
        for (let i = 0; i <= N; i++) {
          const u = i / N
          if (u > drawTo) break
          const p = slerp(a, b, u)
          // Arch: lift above surface
          const lift = 1 + Math.sin(u * Math.PI) * 0.32
          const lx = p[0] * lift
          const ly = p[1] * lift
          const lz = p[2] * lift
          if (lz > -0.05) {
            const x = cx + lx * radius
            const y = cy - ly * radius
            if (!started) { ctx.moveTo(x, y); started = true }
            else ctx.lineTo(x, y)
          }
        }
        if (started) {
          const grad = ctx.createLinearGradient(0, cy - radius, 0, cy + radius)
          grad.addColorStop(0, 'rgba(252, 211, 77, 0.95)')
          grad.addColorStop(0.5, 'rgba(245, 158, 11, 0.85)')
          grad.addColorStop(1, 'rgba(245, 158, 11, 0.3)')
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.4
          ctx.shadowColor = 'rgba(245, 158, 11, 0.6)'
          ctx.shadowBlur = 10
          ctx.stroke()
          ctx.shadowBlur = 0
        }
      })

      /* — Pins — */
      PINS.forEach((pin) => {
        const p = lonlatTo3D(pin.lon, pin.lat, s.rotY)
        if (p[2] <= 0) return
        const x = cx + p[0] * radius
        const y = cy - p[1] * radius
        const depthFade = Math.min(1, p[2] * 1.4 + 0.2)

        // Halo
        const haloGrad = ctx.createRadialGradient(x, y, 0, x, y, 11)
        haloGrad.addColorStop(0, `rgba(252, 211, 77, ${0.95 * depthFade})`)
        haloGrad.addColorStop(0.4, `rgba(245, 158, 11, ${0.55 * depthFade})`)
        haloGrad.addColorStop(1, 'rgba(245, 158, 11, 0)')
        ctx.fillStyle = haloGrad
        ctx.beginPath()
        ctx.arc(x, y, 11, 0, Math.PI * 2)
        ctx.fill()

        // Core
        ctx.fillStyle = `rgba(255, 244, 200, ${depthFade})`
        ctx.beginPath()
        ctx.arc(x, y, 1.9, 0, Math.PI * 2)
        ctx.fill()
      })

      /* — Limb glow (atmosphere on the edge) — */
      const limb = ctx.createRadialGradient(cx, cy, radius * 0.98, cx, cy, radius * 1.06)
      limb.addColorStop(0, 'rgba(56, 189, 248, 0)')
      limb.addColorStop(0.5, 'rgba(56, 189, 248, 0.35)')
      limb.addColorStop(1, 'rgba(56, 189, 248, 0)')
      ctx.fillStyle = limb
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.06, 0, Math.PI * 2)
      ctx.fill()

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    // Speed up rotation a touch on hover (like a curious finger spinning the globe)
    const onEnter = () => { stateRef.current.targetSpeed = 0.026 }
    const onLeave = () => { stateRef.current.targetSpeed = 0.012 }
    canvas.addEventListener('mouseenter', onEnter)
    canvas.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('mouseenter', onEnter)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [size])

  return <canvas ref={canvasRef} className={`c-globe-canvas ${className}`} aria-hidden="true" />
}

/* ────────────────────────────────────────────────────────────
 * Component: Stars
 *
 * Slow drifting starfield in a fixed background canvas.
 * ~80 particles, twinkle via per-star phase, drift downward + sway.
 * Pauses (paints once) under reduced motion.
 * ──────────────────────────────────────────────────────────── */
export function Stars({ density = 0.00012, className = '' }) {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let stars = []
    let rafId = 0
    const reduced = REDUCED()

    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)

      const count = Math.floor(w * h * density)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vy: 0.05 + Math.random() * 0.18,
        sway: Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
        period: 2000 + Math.random() * 4000,
        hue: Math.random() < 0.85 ? 0 : 1, // mostly white, occasional gold
      }))
    }

    let lastT = 0
    function draw(t) {
      if (!lastT) lastT = t
      const dt = t - lastT
      lastT = t
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)

      stars.forEach((s) => {
        if (!reduced) {
          s.y += s.vy * (dt / 16)
          s.x += Math.sin((t + s.phase * 1000) / 2000) * s.sway * (dt / 16) * 0.06
          if (s.y > h + 4) {
            s.y = -4
            s.x = Math.random() * w
          }
        }
        const twinkle = 0.55 + 0.45 * Math.sin((t + s.phase * 1000) / s.period * Math.PI * 2)
        const color = s.hue === 1
          ? `rgba(252, 211, 77, ${0.55 * twinkle})`
          : `rgba(220, 232, 250, ${0.7 * twinkle})`
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      })

      if (!reduced) rafId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafId = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [density])

  return <canvas ref={canvasRef} className={`c-stars ${className}`} aria-hidden="true" />
}

/* ────────────────────────────────────────────────────────────
 * Component: CursorGlow
 *
 * A soft, gradient-radial spotlight that follows the cursor.
 * ~15px lag for a "trailing" feel. Hidden on touch / reduced motion.
 * ──────────────────────────────────────────────────────────── */
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (REDUCED() || matchMedia('(hover: none)').matches) {
      el.style.display = 'none'
      return
    }
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 2
    let cx = tx
    let cy = ty
    let rafId = 0
    const tick = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      el.style.transform = `translate3d(${cx - 220}px, ${cy - 220}px, 0)`
      rafId = requestAnimationFrame(tick)
    }
    const onMove = (e) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
  return <div ref={ref} className="c-cursor-glow" aria-hidden="true" />
}

/* ────────────────────────────────────────────────────────────
 * Component: ScrollHero
 *
 * Wraps Hero content. As user scrolls, applies opacity+translate+scale
 * decay so the Hero "settles" into the page rather than just stopping.
 * Driven by useScrollProgress.
 * ──────────────────────────────────────────────────────────── */
export function ScrollHero({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (REDUCED()) return
    let rafId = 0
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 = top of element at top of viewport
      // 1 = element fully scrolled past
      const p = Math.max(0, Math.min(1, -r.top / Math.max(r.height - vh * 0.5, 1)))
      el.style.setProperty('--c-hero-p', p.toFixed(3))
      rafId = 0
    }
    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])
  return (
    <section ref={ref} className={`c-hero ${className}`}>
      {children}
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * Component: Magnetic
 *
 * Wraps a small inline element (button, badge). The inner content
 * "leans toward" the cursor on hover. Disabled on touch / reduced.
 * ──────────────────────────────────────────────────────────── */
export function Magnetic({ children, className = '', strength = 0.25 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (REDUCED() || matchMedia('(hover: none)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * strength
      const dy = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return (
    <span ref={ref} className={`c-magnetic ${className}`}>
      {children}
    </span>
  )
}
