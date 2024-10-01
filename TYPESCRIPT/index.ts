//TYPE INFERENCE

import { log } from "util";

//typescript automatically detect the type 
var firstname = 'kirtan'

firstname = 6;// errror

firstname = true;//error

firstname = 'john';//accepted bz it is a string 

//datatypes number ,string ,boolean

//NOTE array
let arr = ['kirtan','tamboli'];
arr.push(3);
arr.push('abc')

//mixed array
let mixedarray = ['kirtan',3];//initially only two datatypes are available string and number , so it can now only accepts string and number values

mixedarray.push(5);
mixedarray(true) //errror
mixedarray.push('xyz');

//object
//int this we have to first define the structure
let myDetails ={
    name : "kirtan",
    age : 21,
}

myDetails.address = 'rajasthan';
myDetails.age ='21';


//explicit types
let productName : string
    productName = 'samsung';

productName = 4
console.log(productName);

//union types 
let productCount : string | number ;
productCount = 'ten';// acceptable bz string
productCount = 10 ;// acceptable bz number
productCount = true //error

//arrays 
let companies :string[] = ['meta','amazon',5]

//union types in mixed array
let mixedarr : (string | number)[]=['one',1,true]

//object  
let car :{
    brand : string,
    modelYear :number 
}

car = {
    brand : 'hyundai',
    modelYear : 2023,
    color : 'red'//error bz the property is not exciplitly define the structure of object
}

//functions 
//variation
let fullname :function ;
fullname = (firstname:string ,lastname:string): string //this is written type =>
{
    return firstname+lastname
}
//function signatures variation 2
//in this we define structure of function which types of arguments it will acceppt and what types of value will it return

let add : (a:number ,b:number)=> number ;
add =(a,b)=>
{
    return a+b
}

///union types in function 

let productCountt : (a:string , b :string | number) => void

productCountt =(a,b)=>{
    console.log(`product name is ${a},available in the stock = ${b}`);
    
}

productCountt('shirt',12) 

//type aliases 

