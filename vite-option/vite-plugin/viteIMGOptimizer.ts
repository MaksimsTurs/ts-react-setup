import { ViteImageOptimizer as func } from 'vite-plugin-image-optimizer'

const viteIMGOptimizer = () =>
	func({
		test: /\.(webp)$/i,
		webp: {
			quality: 80,
			alphaQuality: 80,
			effort: 6,
			smartSubsample: true,
		},
	})

export default viteIMGOptimizer
