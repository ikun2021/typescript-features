class Car{
  constructor(public color:string){

  }
  protected honk():void{
    console.log('beep');
  }
}

class A extends Car{
  constructor(public wheels:number, color:string){
    super(color);
  }
}

const a = new A(3,'RED');
