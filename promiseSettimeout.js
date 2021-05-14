setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function(a, b) {
  console.log(2);
  for(var i = 0; i < 10; i++) {
      i == 9 && a();
  }
  console.log(3);
}).then(function() {
  console.log(4)
});
console.log(5)
// Promise.then()在本轮“事件循环”结束时执行  setTimeout(fn, 0)在下一轮“事件循环”开始时执行

// 异步队列  2 3 5 4 1

// 23541