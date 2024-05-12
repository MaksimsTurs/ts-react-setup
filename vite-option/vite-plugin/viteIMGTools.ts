import { imagetools } from 'vite-imagetools'

export default () => {
  return imagetools({
    removeMetadata: true,
    include: [/^[^?]+\.(jpeg|jpg|png|webp)(\?.*)?$/]
  })
}