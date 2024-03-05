import { chunkSplitPlugin as func } from 'vite-plugin-chunk-split'

const vitePluginChunkSplit = () => func({
  strategy: 'default',
  customChunk(context) {
    const { file } = context

    const splitedString: string[] = file.split('/')
    const folderName: string = splitedString[1]

    if(splitedString.includes('page.tsx')) return `page/${folderName}`
  },
})

export default vitePluginChunkSplit