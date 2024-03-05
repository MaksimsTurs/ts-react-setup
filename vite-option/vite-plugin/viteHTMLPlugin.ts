import { createHtmlPlugin as func } from 'vite-plugin-html'

const viteHTMLPlugin = () => func({ minify: true })

export default viteHTMLPlugin