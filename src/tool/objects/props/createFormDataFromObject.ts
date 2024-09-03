export default function createFormDataFromJSON(object: any): FormData {
  const formData = new FormData()
  const entries = Object.entries(object)

  for(let [key, value] of entries) {
    if(value instanceof FileList) {
      formData.append(key, value[0])
    } else {
      formData.append(key, value as string)
    }
  }

  return formData
}