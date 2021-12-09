//泛型类
class ArrayOfAnything<T>{
  constructor(public collection: T[]){}

  get(index:number):T{
    return this.collection[index]; 
  }
}

new ArrayOfAnything<string>(['1','2']);
//type inference 后面不加《string》也可以，但是最好加上，可以帮助排除错误。
const arr = new ArrayOfAnything(['1','2']);


//generics with functions
function printAnythings<T>(arr:T[]):void{
  for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
  }
}
printAnythings(['1','2']);
printAnythings<string>(['1','2']);


//generic constraints T extends 接口
class Car{
  print(){
  }
}

class House{
  print(){

  }
}

interface Printable{
  print(): void;
}

function printCarsOrHouses <T extends Printable> (arr: T[]) : void{
  for(let i=0;i<arr.length;i++){
    arr[i].print();
  }
}

printCarsOrHouses([1,2,3,4]);

printCarsOrHouses<Car>([new Car(),new Car()]);