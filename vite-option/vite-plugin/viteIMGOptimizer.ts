import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default () => ViteImageOptimizer({ test: /\.(webp)$/i, webp: { quality: 80, alphaQuality: 80, effort: 6, smartSubsample: true, } })