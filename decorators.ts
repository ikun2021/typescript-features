// static method, static accessor, static property也能使用装饰器
//类装饰器
@classDecorator
class Boat{
  //property
  @decorator2
  color: string  = 'red';
  

  //accessor
  @decorator2
  get formattedColor(): string{
    return `this boat color is ${this.color}`;
  }
  
  //method
  //方法装饰器
  @decorator1('Oops boat was sunk in ocean') //errorMessage
  float():void{
    throw new Error();
  }


  //parameter
  //参数装饰器
  pilot(
    @parameterDecorator speed:string,
    @parameterDecorator weight:number):void
    {
    if(speed === 'fast'){
      console.log('fast');
    }else{
      console.log('nothing');
    }
  }
}

//类装饰器的唯一参数：类的constructor
function classDecorator(construtor: typeof Boat){
  console.log(construtor);
}

//第三个参数，index---参数的位置 从0开始
function parameterDecorator(target: any, propertyKey: string, index: number){
  console.log(propertyKey, index);

}

//usage of decorator in properties---there is a color property
//can't modify properties, can't wrap them with some function,because we can't access properties by decorator(prototype)
function decorator2(target:any, propertyKey:string){
  //decorator is ruuning when we define the class,before we create an instance.  it can't access instance's properties
  //the prototype generally stores method definitions,instance properties are defined in constructor
  console.log(target[propertyKey]); //undefined
}

//target是prototype of the object
//propertyKey是method，property，accessor的key
//desc是property descriptor
//装饰器扩展了float（）的功能，现在float添加了一个输出错误的功能。

//decorator factory can be used to configure a decorator,return a function ,just wrap the decorator in it.
function decorator1(errorMessage: string){
  return function (target: any, propertyKey: string, desc:PropertyDescriptor):void{
    const method = desc.value; //拿到想要的float()
    //change float method
    desc.value = function() {
      try{
        method();
      }catch(e){
        console.log(errorMessage)
      }
    }
  }
}



//change property
Object.defineProperty(Boat,'make',{writable:false});

new Boat().float();