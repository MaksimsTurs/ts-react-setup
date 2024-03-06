import viteWebFont from 'vite-plugin-webfont-dl'

export default (isDev: boolean) => viteWebFont([], { injectAsStyleTag: false, minifyCss: !isDev })