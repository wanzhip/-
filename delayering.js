//扁平化处理
// let arr = [1, [2, 3, [4, 5]]]
// let arr = [1, 2, 3, 4, 5]


// // reduce(func(prev,curr,index,arr),[initialValue])
// //调用reduce的数组必须不能为空如果没有初始值


// arr.reduce((prev,cur,index)=>{
//   console.log(prev,cur,index);
//   return cur
// })



// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// let nameNum = names.reduce((pre,cur)=>{
//   console.log(pre, cur);
//   if(cur in pre){ //{ Alice:1 }
//     pre[cur]++
//   }else{
//     pre[cur] = 1 
//   }
//   return pre
// },{})
// console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

// let arr = [[0, 1], [2, 3], [4, 5]]
// let newArr = arr.reduce((pre,cur)=>{
//   console.log(pre,cur);
//     return pre.concat(cur)
// },[])
// console.log(newArr); // [0, 1, 2, 3, 4, 5]

// console.log([].concat('1',2));
// let arr = [[0, 1], [2, 3], [4,[5,6,7]]]
// const newArr = function(arr){
//    return arr.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArr(cur):cur),[])
// }
// console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]

let arr = [1, [2, 3, [4, 5]]]

function flatten(arr) {
  console.log([2, 3, [4, 5]].join(','));
  return arr.toString().split(',').map(function(item) {
      return Number(item);
  })
} 
let o = flatten(arr)
console.log(o);


console.log(Array.isArray(arr));