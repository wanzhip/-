// promise 状态

// pending
// fulfilled
// reject
const PENDING = "pending"; //等待状态
const FULFILLED = 'FULFILLED'; //成功状态
const REJECTED = 'rejected'; //失败状态
class MyPromise{
  constructor(executor){
    console.log(executor.toString(),'这是啥');
    executor(this.resolve, this.reject)
  }
  status = PENDING
  success = undefined
  error = undefined
  successCallback = []
  failCallback = []
  resolve = success=>{
    // console.log(success,'resolve接收');
    // console.log(this.status);
    if(this.status != PENDING) return
    this.status = FULFILLED;
    this.success = success;
    while(this.successCallback.length)this.successCallback.shift()(this.success);
  }

  reject = error=>{
    // console.log('执行');
    // console.log(error);
    if(this.status != PENDING)return
    this.status = REJECTED
    this.error = error
    // console.log(this.failCallback);
    while(this.failCallback.length)this.failCallback.shift()(this.error)
  }

  then(successCallback, failCallback){
    console.log('then执行');
    console.log(successCallback, failCallback);
    let promise2 = new MyPromise((resolve,reject)=>{
      // console.log(resolve,reject);
      if(this.status === FULFILLED){
        let x = successCallback(this.success)
        resolve(x)
      }else if(this.status === REJECTED){
        // console.log('111');
        reject(this.error)
      }else{
        //当前状态为等待，也就是promise状态为pending，
        this.successCallback.push(successCallback);
        this.failCallback.push(failCallback);
      }
    })
    return promise2
  }
}

let promise = new MyPromise((resolve, reject) => {
  // resolve('成功');
  reject('失败')
})
promise
  .then(res => {
      console.log(res,'一次');
      return 1000
  }).
then(res => {
  console.log(res,'二次');
})