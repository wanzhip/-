let obj = {
  a:function(){
    console.log(this);
  }
}

obj.a();

let newFun = obj.a


newFun()