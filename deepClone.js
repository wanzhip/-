let obj = {
  a:1,
  b:undefined,
  c:function(){
    console.log(1);
    return 2
  },
  d:{
    a:2
  }
}

// let obj = 1

function deepClone(target){
  let obj2 = {};
  if(typeof target == 'object'){
    for(key in target){
      if(obj2[key]){
        return
      }else{
        obj2[key] = deepClone(target[key])
      }
    }
    return obj2;
  }else{
    obj2 = target;
    return obj2;
  }
}

let newObj = deepClone(obj)
// console.log(newObj);
// console.log(newObj === obj);
console.log(obj.c(),'原');
console.log(newObj.c(),'现');