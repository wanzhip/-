// promise 状态

// pending
// fulfilled
// reject

class MyPromise{
  constructor(executor){
    executor(this.resolve, this.reject)
  }
}
