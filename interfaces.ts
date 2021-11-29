const oldCivic={
  name:'civiv',
  year:2000,
  broken:true,
  color:'yellow',
  summary():string{
    return `Name is ${this.name}`;
  }
}
const printCar=(car:{name:string; year:number; broken:boolean; color:string})=>{
  console.log(`Name:${car.name}`);
  console.log(`Color:${car.color}`);
}
printCar(oldCivic);

//object的properties可以多于interface，但是interface有的他必须有！
interface Vehicle{
  broken:boolean;
  color:string;
  summary():string
}
const printVehicle=(car:Vehicle)=>{
  console.log(`Color:${car.color}`);
}
printVehicle(oldCivic);