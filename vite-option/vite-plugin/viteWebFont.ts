import func from 'vite-plugin-webfont-dl'

const viteWebFont = (isDev: boolean) => func([], { injectAsStyleTag: false, minifyCss: !isDev })

export default viteWebFont