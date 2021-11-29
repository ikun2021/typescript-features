const drink={
  color:'brown',
  carbanated:true,
  sugar:40
};

//type alias
type Drink = [string,boolean,number]
//定义tuple，order不能变
const pepsi: Drink =['brown',true,40];


//tuple
const carStatus:[number,number]=[400,3000];
//object
const carStatus2={
  horsepower:400,
  weight:3000
}