import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default () => {
  return ViteImageOptimizer({ 
    test: /\.(webp)$/i, 
    webp: { 
      quality: 80, 
      alphaQuality: 80, 
      effort: 6, 
      smartSubsample: true 
    }, 
  })
}