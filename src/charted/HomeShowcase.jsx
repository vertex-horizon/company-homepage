import { useEffect, useRef, useState } from 'react'
import { APP_STORE_URL } from './config.js'
import assets from './showcase-assets.json'
import './HomeShowcase.css'

// 官网使用画板中的独立渲染与裸机图层：场景可以铺开，手机 UI 始终完整展示。
// 原始节点、像素上限与等比导出哈希保存在 showcase-assets.json，不把示意图描述为网页实时渲染。
export function ShowcaseImage({ name, alt, className = '', priority = false, sizes = '100vw' }) {
  const asset = assets[name]
  return (
    <img
      src={asset.files[0].src}
      srcSet={asset.files.map(file => `${file.src} ${file.width}w`).join(', ')}
      sizes={sizes}
      width={asset.sourceWidth}
      height={asset.sourceHeight}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}

function DownloadButton() {
  return (
    <a className="c-btn c-btn--appstore" href={APP_STORE_URL} target="_blank" rel="noreferrer" aria-label="Download Mapvoy on the App Store">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
      <span><span className="c-as-eyebrow">Download on the</span><span className="c-as-main">App Store</span></span>
    </a>
  )
}

export function WorldHero() {
  return (
    <section className="mw-hero" aria-labelledby="mw-hero-title">
      <ShowcaseImage name="earth-wide" alt="A globe stretching across the page, with sample photo locations connecting North America and Europe" className="mw-hero-art" priority />
      <div className="mw-hero-shade" aria-hidden="true" />
      <div className="mw-hero-content">
        <p className="mw-kicker">MAPVOY FOR IPHONE</p>
        <h1 id="mw-hero-title"><span>You've been</span><span>further than</span><em>you think.</em></h1>
        <p className="mw-hero-summary">Every place in your photos,<br />on a 3D globe.</p>
        <div className="mw-hero-actions"><DownloadButton /><a href="#globe" className="mw-text-link">Explore your world <span aria-hidden="true">↘</span></a></div>
        <p className="mw-hero-footnote">Built on your iPhone. No account to create.</p>
      </div>
      <a href="#globe" className="mw-scroll-cue"><span>THE WORLD YOU ALREADY KNOW</span><span aria-hidden="true">↓</span></a>
    </section>
  )
}

const STYLES = [
  { id: 'earth', name: 'Earth', image: 'earth-wide', title: <>Real terrain.<br />Real sunlight.</>, description: "See your places on a globe under today's sunlight, with city lights on the night side and real stars beyond.", alt: 'Earth globe with sunlight, clouds and sample travel connections' },
  { id: 'ink', name: 'Ink', image: 'ink-detail', title: <>Your places,<br />in pen on paper.</>, description: 'A paper globe with ink marks for the places you have visited. One of three globe styles, all free.', alt: 'Ink paper globe detail with visited countries and photo locations across Europe' },
  { id: 'paint', name: 'Paint', image: 'paint-map', title: <>Color in<br />where you’ve been.</>, description: 'Paint fills in the countries and regions you have visited. A different way to see a familiar world.', alt: 'Paint terrain map of Europe, with France and the UK colored and Italy highlighted' },
]

function ExpandIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" /></svg>
}

export function GlobeExperience() {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef(null)
  const style = STYLES[selected]

  useEffect(() => {
    if (!expanded) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [expanded])

  const handleTabKey = (event) => {
    let next
    if (event.key === 'ArrowRight') next = (selected + 1) % STYLES.length
    else if (event.key === 'ArrowLeft') next = (selected + STYLES.length - 1) % STYLES.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = STYLES.length - 1
    else return
    event.preventDefault()
    setSelected(next)
    event.currentTarget.parentElement.querySelectorAll('[role="tab"]')[next].focus()
  }

  return (
    <section id="globe" className="mw-world" aria-labelledby="mw-world-title">
      <header className="mw-section-heading"><p className="mw-kicker">ONE WORLD. THREE PERSPECTIVES.</p><h2 id="mw-world-title">See it your way.</h2></header>
      <div className="mw-world-stage" data-style={style.id}>
        <div id="globe-panel" role="tabpanel" aria-label={`${style.name} style preview`}>
          <ShowcaseImage key={style.id} name={style.image} alt={style.alt} className="mw-scene-image" sizes={style.id === 'earth' ? '100vw' : '(max-width: 720px) 100vw, 65vw'} />
          <div className="mw-scene-shade" aria-hidden="true" />
          <div className="mw-scene-copy"><span className="mw-scene-number">0{selected + 1} / 03</span><h3>{style.title}</h3><p>{style.description}</p></div>
        </div>
        <div className="mw-stage-controls">
          <div className="mw-style-tabs" role="tablist" aria-label="Globe style">
            {STYLES.map((item, index) => <button key={item.id} type="button" role="tab" aria-selected={selected === index} aria-controls="globe-panel" tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={handleTabKey}>{item.name}</button>)}
          </div>
          <button className="mw-expand" type="button" onClick={() => { dialog.current.showModal(); setExpanded(true) }} aria-label={`Expand ${style.name} view`}><ExpandIcon /><span>Expand view</span></button>
        </div>
      </div>
      <p className="mw-art-note">Globe illustrations use sample travel data.</p>
      {/* 使用原生 dialog 的焦点圈与 Esc 收口，在 iOS 上同样提供整视口查看，不依赖受限的浏览器 Fullscreen API。 */}
      <dialog className="mw-lightbox" ref={dialog} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close() }} aria-label={`${style.name} full view`}>
        <div className="mw-lightbox-scene" data-style={style.id}>
          {expanded && <ShowcaseImage name={style.image} alt={style.alt} className="mw-scene-image" priority />}
          <div className="mw-lightbox-shade" aria-hidden="true" />
          <div className="mw-lightbox-brand"><img src="/mapvoy/icon/icon-64.png" alt="" width="28" height="28" />Mapvoy <span> / {style.name}</span></div>
          <button className="mw-lightbox-close" type="button" onClick={() => dialog.current.close()} aria-label="Close full view">Close <span aria-hidden="true">×</span></button>
          <div className="mw-lightbox-caption"><h2>{style.title}</h2><p>Sample travel illustration · {style.name} style</p></div>
        </div>
      </dialog>
    </section>
  )
}

const STORIES = [
  { image: 'phone-journeys', label: 'JOURNEYS', title: 'It found the trip you forgot.', text: 'Dates, places and photos come together in trips, from a day out to a chapter of your life.', alt: 'Mapvoy iPhone interface showing the Rome and Athens trip and its photos' },
  { image: 'phone-passport', label: 'PASSPORT', title: 'Your countries, stamped in.', text: 'Countries and regions fill in from the places in your photos. See where you have been, one place at a time.', alt: 'Mapvoy Passport on iPhone with country stamps and a map' },
  { image: 'phone-logbook', label: 'YEAR IN REVIEW', title: 'Your Logbook. It wrote itself.', text: 'A free Year in Review for each year’s travels. Look back through the places and photos that shaped your year.', alt: 'Mapvoy Year in Review on iPhone with a sample 2025 Rome cover' },
]

export function PhoneStories() {
  return (
    <section className="mw-stories" id="five-moments" aria-labelledby="mw-stories-title">
      <header className="mw-section-heading"><p className="mw-kicker">MADE FROM THE PHOTOS ALREADY ON YOUR IPHONE</p><h2 id="mw-stories-title">Your world.<br />Always with you.</h2><p>A map to explore. Trips to open. Years to look back on.</p></header>
      <div className="mw-phone-grid">{STORIES.map(story => <article key={story.image} className="mw-phone-story"><div className="mw-phone-art"><ShowcaseImage name={story.image} alt={story.alt} sizes="(max-width: 720px) 78vw, 340px" /></div><div className="mw-phone-copy"><p className="mw-kicker">{story.label}</p><h3>{story.title}</h3><p>{story.text}</p></div></article>)}</div>
    </section>
  )
}

const SHARE_CARDS = [
  { name: 'share-europe', alt: 'Europe globe share card with Mapvoy branding', caption: 'Europe' },
  { name: 'share-california', alt: 'California globe share card with Mapvoy branding', caption: 'California' },
  { name: 'share-numbers', alt: 'Sample 2025 travel numbers on a Mapvoy share card', caption: 'A year in numbers' },
  { name: 'share-greece', alt: 'Greece milestone share card with Mapvoy branding', caption: 'A place to remember' },
]

export function ShareGallery() {
  return (
    <section className="mw-sharing" aria-labelledby="mw-sharing-title">
      <header className="mw-section-heading"><p className="mw-kicker">SOMETHING WORTH KEEPING</p><h2 id="mw-sharing-title">Your world,<br />out in the world.</h2><p>Cards and globe videos from your trips and your globe.<br />Make a card to keep, or a video to share.</p></header>
      <div className="mw-share-wall">{SHARE_CARDS.map(card => <figure key={card.name}><ShowcaseImage name={card.name} alt={card.alt} sizes="(max-width: 720px) 70vw, 26vw" /><figcaption>{card.caption}</figcaption></figure>)}</div>
      <p className="mw-art-note">Sample travel data · <a href="/mapvoy/credits.html">Artwork credits</a></p>
    </section>
  )
}
