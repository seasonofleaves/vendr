import { Snack } from './models/Snacks.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  snacks = [
    new Snack({ name: 'Snickers', price: 3.50, imgUrl: 'https://pbs.twimg.com/profile_images/1017434191909310466/TtT51Etq_400x400.jpg' })
  ]

  money = 0

}

export const AppState = createObservableProxy(new ObservableAppState())