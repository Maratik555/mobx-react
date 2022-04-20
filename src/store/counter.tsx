import {makeAutoObservable, action, observable, autorun} from 'mobx'


class Counter {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  increment = () => {
   this.count ++
   this.count ++
   this.count ++
  }

  decrement = () => {
    this.count --
   // this.count = this.count - 1
  }

  get total() {
    return this.count * 2
  }
}

export const OnCounter = new Counter()

autorun(() => {
  console.log(OnCounter.total)
})
