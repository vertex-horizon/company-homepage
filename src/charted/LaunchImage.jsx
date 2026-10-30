// 官网只引用 Product V2「10 · 商店与上线物料」的完整构图。
// 等比压缩，不裁切、不重绘 App；来源节点与哈希见 launch-assets.json。
export default function LaunchImage({ name, alt, className, priority = false, sizes = '(max-width: 880px) 82vw, 380px' }) {
  return (
    <img
      src={`/mapvoy/media/${name}-660.webp`}
      srcSet={`/mapvoy/media/${name}-660.webp 660w, /mapvoy/media/${name}-1320.webp 1320w`}
      sizes={sizes}
      width="1320"
      height="2868"
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  )
}
