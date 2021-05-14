/**
 * call、apply、bind都是改变this指向的方法
 * 
 * call:
 * 非严格模式
 * 如果不传参数，或者第一个参数是null或nudefined，this都指向window
 * 严格模式
 * 第一个参数是谁，this就指向谁，包括null和undefined，如果不传参数this就是undefined
 * 
 * 
 * apply：和call基本上一致，唯一区别在于传参方式
 * 
 * 
 * bind
 * 语法和call一模一样，区别在于立即执行还是等待执行，bind不兼容IE6~8
 * 
 * 
 * fn.call(obj, 1, 2); // 改变fn中的this，并且把fn立即执行
    fn.bind(obj, 1, 2); // 改变fn中的this，fn并不执行



    this改变为obj了，但是绑定的时候立即执行，当触发点击事件的时候执行的是fn的返回值undefined
    document.onclick = fn.call(obj);

    bind会把fn中的this预处理为obj，此时fn没有执行，当点击的时候才会把fn执行
    document.onclick = fn.bind(obj);
 */


// const obj = {
//   name: 'joy',
// };

// function getName(a, b) {
//   console.log(this.name, a, b);
// }

// Function.prototype.newApply = function (context,arg) {
//   if (typeof this !== 'function') {
//     throw this + 'is not a function'
//   }
//   context = context || window;
//   arg = arg || [];
//   context.myFn = this;
//   console.log(context);
//   const result = context.myFn(...arg);
//   console.log(context.myFn.arguments);
//   delete context.myFn;
//   return result;
// };

// getName.newApply(obj,[1,2]); //ƒ getName(){ console.log(this.name); }

const obj = {
  name: 'joy',
};

function getName(a, b) {
  console.log(this.name, a, b);
}
function b(args){console.log('我是this：' + this,'我是b的参数args：' + args)}
Function.prototype.newCall = function (context,...arg) {
  if (typeof this !== 'function') {
    throw this + 'is not a function'
  }
  context = context || window;
  arg = arg || [];
  context.myFn = this;
  console.log(context);
  const result = context.myFn(...arg);
  delete context.myFn;
  return result;
};

getName.newCall.newCall(b,1,2); //ƒ getName(){ console.log(this.name); }

// const obj = {
//   name:'joy'
// };

// function getName(){
//   console.log(this.name);
// }

// Function.prototype.newBind = function (that) {
//   if (typeof this !== 'function') {
//       throw new TypeError('Error')
//   }
//   const args = [...arguments].slice(1);
//   const fn = this;
//   // return function () {
//   //     fn.apply(that)
//   // };
//   // 返回一个函数
//   return function F() {
//       // 因为返回了一个函数,如果是new的话this就要指向新创建的对象了
//       if (this instanceof F) {
//           return new fn(...args, ...arguments)
//       }
//       return fn.apply(that, args.concat(...arguments))
//   }
// };

// console.log(getName.newBind(obj).toString());
// getName.newBind(obj) //joy