import { defineConfig as viteConfig } from 'vite'

import path from 'node:path'

import test from './vite-option/test.vite'
import server from './vite-option/server.vite'
import build from './vite-option/build.vite'

import viteWebFont from './vite-option/vite-plugin/viteWebFont'
import viteHTMLPlugin from './vite-option/vite-plugin/viteHTMLPlugin'
import viteOptimizeCSS from './vite-option/vite-plugin/viteOptimizeCSS'
import viteIMGTools from './vite-option/vite-plugin/viteIMGTools'
import viteIMGOptimizer from './vite-option/vite-plugin/viteIMGOptimizer'
import vitePluginChunkSplit from './vite-option/vite-plugin/vitePluginChunkSplit'

export default viteConfig(({ mode }) => {
	const isDev: boolean = mode === 'development' ? true : false

	return {
		root: path.resolve(__dirname, 'src'),
		publicDir: path.resolve(__dirname, 'public'),
		assetsInclude: ['**/*.png', '**/*.webp', '**/*.jpg', '**/*.jpeg'],
		clearScreen: false,
		appType: 'spa',
		resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
		test: {...test, setupFile: path.resolve(__dirname, 'tests-setup.ts') },
		server,
		build: {
			...build(isDev),
			outDir: path.resolve(__dirname, 'build'),
			rollupOptions: {
				input: path.resolve(__dirname, 'src/index.html'),
				output: {...build(isDev).rollupOptions?.output},
			},
		},
		plugins: [vitePluginChunkSplit(), viteWebFont(isDev), viteHTMLPlugin(), viteOptimizeCSS(), viteIMGTools(), viteIMGOptimizer()]
	}
})