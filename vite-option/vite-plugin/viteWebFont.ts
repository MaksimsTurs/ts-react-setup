import viteWebFont from 'vite-plugin-webfont-dl'

export default (isDev: boolean, fontLinks: string[] = []) => {
  return viteWebFont(fontLinks, { 
    injectAsStyleTag: false, 
    embedFonts: true,
    minifyCss: !isDev,
  })
}