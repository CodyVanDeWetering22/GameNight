import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Player } from "./models/Player.js"
class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  Players = [
    new Player('Levi', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wilsoncenter.org%2Fperson%2Fjames-person&psig=AOvVaw2pANZDzhyhF7qvYgm1vNFl&ust=1696369690039000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPCBtdir2IEDFQAAAAAdAAAAABAE'),
    new Player('Jaret', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fed44f863-7df0-4599-bc9f-976ed9c238c9_1.62e7434a4115ac6da84d6d6112050988.jpeg%3FodnHeight%3D768%26odnWidth%3D768%26odnBg%3DFFFFFF&tbnid=9aN9X6-l8p7UxM&vet=12ahUKEwjg8ev8q9iBAxUILDQIHdvmBYsQMygAegUIARCUAQ..i&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FSOUR-PATCH-KIDS-Lime-Soft-Chewy-Candy-Just-Green-2-Lb-Party-Size-Bag%2F327031000&docid=PGmSAqSMhfuOHM&w=768&h=768&q=sourpatch%20kids%20green&ved=2ahUKEwjg8ev8q9iBAxUILDQIHdvmBYsQMygAegUIARCUAQ')
  ]



  // NOTE Used to load initial data
  init() { }
}


export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
