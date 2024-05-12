import { defineConfig as viteConfig } from 'vite'

import path from 'node:path'

import buildOption from './vite-option/build.vite'
import resolveOption from './vite-option/resolve.vite'
import serverOption from './vite-option/server.vite'

import viteWebFont from './vite-option/vite-plugin/viteWebFont'
import viteHTMLPlugin from './vite-option/vite-plugin/viteHTMLPlugin'
import viteOptimizeCSS from './vite-option/vite-plugin/viteOptimizeCSS'
import viteIMGTools from './vite-option/vite-plugin/viteIMGTools'
import viteIMGOptimizer from './vite-option/vite-plugin/viteIMGOptimizer'
import vitePluginChunkSplit from './vite-option/vite-plugin/vitePluginChunkSplit'

import { APP_TYPE, ASSETS_INCLUDE_EXTENSTIONS } from './vite-option/const'

export default viteConfig(({ mode }) => {
	const isDev: boolean = mode === 'development' ? true : false
	const srcPath: string = path.resolve(__dirname, 'src')

	const prodPlugins = [viteHTMLPlugin(), viteIMGTools(), viteIMGOptimizer(),  viteOptimizeCSS(), vitePluginChunkSplit()]
	const devPlugins = [viteWebFont(isDev)]

	function resolve(_path: string): string {
		return path.resolve(__dirname, _path)
	}

	return {
		...resolveOption(srcPath),
		...serverOption(resolve('src/**/*.*')),
		...buildOption(isDev, resolve('output'), resolve('src/index.html')),
		publicDir: resolve('public'),
		appType: APP_TYPE,
		assetsInclude: ASSETS_INCLUDE_EXTENSTIONS,
		root: srcPath,
		clearScreen: false,
		plugins: isDev ? devPlugins : [...devPlugins, ...prodPlugins]
	}
})