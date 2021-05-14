// var arr=[1, 8, 3, 5, -1];
// function compare(a,b){
//     console.log(a,b,arr);
//     return a-b;
// }
// arr.sort(compare);
/**
控制台输出
1 8 [1, 8, 3, 5, -1]
8 3 [1, 8, 3, 5, -1]
1 3 [1, 8, 8, 5, -1]
8 5 [1, 3, 8, 5, -1]
3 5 [1, 3, 8, 8, -1]
8 -1 [1, 3, 5, 8, -1]
5 -1 [1, 3, 5, 8, 8]
3 -1 [1, 3, 5, 5, 8]
1 -1 [1, 3, 3, 5, 8]
[-1,1, 3, 5, 8]
*/

// 第一次1和8比较，1<8，不需要调整位置。   

// 　　第二次8和3比较，8>3，需要调整位置。但是这里没有交换位置，仅仅是8覆盖了3位置。这里就可以推断出不是单纯的使用了冒泡算法。
//   第三是1和3比较，1<3，3替换了8的位置。什么鬼，几个意思？？？看到这里我也是表示不懂呀。那就继续往下看咯。   

// 　　第四是8和5比较，8>5，又仅仅是覆盖，没有交换位置。还是不懂，继续往下！
//   第五是3和5比较，3<5，5替换了8的位置，不懂，继续往下！   

// 　　第六是8和-1比较，8>-1， 还仅仅是覆盖，继续往下！
//   第七、八、九次，-1依次和5，3，1做了比较，并且5，3，1都移动了一次位置。

// 　　我们得出了结论：sort()方法是使用的冒泡和插入两种方式结合进行排序的。


var arr = [6,5,4,8,12,52,14]
//实现查找最小值索引
function findIndex(arr,index){
  var min = arr[index];
  var minIndex = index;
  for (let i = index; i < arr.length; i++) {
    if(min > arr[i]){
      min = arr[i]
      minIndex = i;
    }
  }
  return minIndex;
}

for (let i = 0; i < arr.length; i++) {
    var minIndex = findIndex(arr,i)
    var temp;
    temp = arr[minIndex]
    arr[minIndex] = arr[i]
    arr[i] = temp;
}

console.log(arr);