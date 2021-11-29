//type annotation: add code to define type
const apples:number =5;
apples =10;
//use let to reassign
let a:number =5;
a=10;

//type inference
//variable 初始化的时候，ts
let b =10;

let c;
c=10;


const finished:boolean=true;
const abc:null=null;
const adcd:undefined =undefined;

//built in obejcts
let now:Date = new Date();

//array
let colors:string[] =['red','green'];

let numbers:number[]=[1,2,3];

let bools:boolean[] =[true,false,false];

//class
class Car{

}
let car:Car =new Car();

//object literal
let point:{x:number ; y:number}={
  x:10,
  y:20,
}

//function
// const logNumber:(i:number)=>void 
//   =(i:number)=>{console.log(i)}
const logNumber=(i:number):void=>{
  console.log(i);
}

//when to use annotations
//1.function that return the 'any' type
const json= '{"x":10,"y":20}';
const coordinates:{x:number;y:number} =JSON.parse(json);

//2. delayed initialization
let words=['red','green'];
let foundWord:boolean; //let foundWord=false

for(let i=0;i<words.length;i++){
  if(words[i]==='green'){
    foundWord=true;
  }
}

//3.如果你不定义的话，typescript不能推断type
let aaa =[-10,2,0];
let aboveZero:boolean | number =false;

for(let i=0;i<aaa.length;i++){
  if(aaa[i]>0){
    aboveZero=aaa[i];
  }
}