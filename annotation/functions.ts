
//no type inference for arguments
//inference能通过a+b推断返回值的类型，但是我们必须要自己定义返回值类型
//否则无法发现return的错误
const add = (a:number,b:number):number=>{
  return a + b;
};


//a named function
function divide(a:number,b:number):number{
  return a/b;
}


//anonymous function
const multiply = function(a:number,b:number):number{
  return a*b;
}



