import type { KeyValueObject } from "@/global.type"
import type { Coockie } from "./Coockie.lib.type"

const Coockie: Coockie = {
  getOne: function(key) {
    return parse()[key]
  },
  setOne: function(key, value, options) {
    document.cookie = `${key}=${value};Path=/;Max-Age=${options?.expiredAt ? 60 * 60 * 24 * options?.expiredAt : 1};`
  }
}

function parse(): KeyValueObject {
  let coockies = {}
  
  document.cookie.split(/\;/).forEach(coockie => {
    const [key, value] = coockie.split(/\=/)
    coockies = {...coockies, [key.trim()]: value }
  })

  return coockies
}

export default Coockie