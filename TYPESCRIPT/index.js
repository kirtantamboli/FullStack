"use strict";
//TYPE INFERENCE
Object.defineProperty(exports, "__esModule", { value: true });
//typescript automatically detect the type 
var firstname = 'kirtan';
firstname = 6; // errror
firstname = true; //error
firstname = 'john'; //accepted bz it is a string 
//datatypes number ,string ,boolean
//NOTE array
var arr = ['kirtan', 'tamboli'];
arr.push(3);
arr.push('abc');
//mixed array
var mixedarray = ['kirtan', 3]; //initially only two datatypes are available string and number , so it can now only accepts string and number values
mixedarray.push(5);
mixedarray(true); //errror
mixedarray.push('xyz');
//object
//int this we have to first define the structure
var myDetails = {
    name: "kirtan",
    age: 21,
};
myDetails.address = 'rajasthan';
myDetails.age = '21';
//explicit types
var productName;
productName = 'samsung';
productName = 4;
console.log(productName);
//union types 
var productCount;
productCount = 'ten'; // acceptable bz string
productCount = 10; // acceptable bz number
productCount = true; //error
//arrays 
var companies = ['meta', 'amazon', 5];
//union types in mixed array
var mixedarr = ['one', 1, true];
//object  
var car;
car = {
    brand: 'hyundai',
    modelYear: 2023,
    color: 'red' //error bz the property is not exciplitly define the structure of object
};
//functions 
//variation
var fullname;
fullname = function (firstname, lastname) {
    return firstname + lastname;
};
//function signatures variation 2
//in this we define structure of function which types of arguments it will acceppt and what types of value will it return
var add;
add = function (a, b) {
    return a + b;
};
///union types in function 
var productCountt;
productCountt = function (a, b) {
    console.log("product name is ".concat(a, ",available in the stock = ").concat(b));
};
productCountt('shirt', 12);
//type aliases 
