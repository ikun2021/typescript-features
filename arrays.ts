const carMakers:string[] =['ford','tesla','toyato'];
const myCar = carMakers.pop();
const car =carMakers[1];

const carBymake:string[][]=[];

carMakers.map((car:string):string=>{
  return car.toUpperCase();
});

//flexible types
const importantDates:(Date | string)[]= [new Date()];
importantDates.push('2020-10-10');
importantDates.push(100);