import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

export default () => chunkSplitPlugin({
  strategy: 'default',
  customChunk(context) {
    const { file } = context

    const splitedString: string[] = file.split('/')
    const folderName: string = splitedString[1]

    if(splitedString.includes('page.tsx')) return `page/${folderName}`
  },
})