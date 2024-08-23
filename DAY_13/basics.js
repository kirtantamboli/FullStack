// const details = {
//     firstName : 'Garv',
//     age : 2024-2004,
//     address:{
//         state : 'Udaipur'
//     }
// }
// const {firstName,age,address:{state}} = details;

// console.log(firstName,age,state);


// SPREAD OPERATOR(...)
// const arr = [1,2,3,4,5];
// console.log(...arr);

// copy an array or object
// const arr2 = [...arr];
// console.log(arr2.push(6));
// console.log(arr,arr2);

// adding two arrays
// const clothing = ['shirt','Jeans'];
// const electronic = ['tv','ac'];

// const shoppingCart = ['shoes',...clothing,...electronic,'Mobile'];
// console.log(shoppingCart);

// Object

// const obj1={
//     a:1,
//     b:2,
// }
// const obj2 = {
//     b:3,
//     c:4,
// }
// const obj3 = {...obj1};
// console.log(obj3);

// NOTE in the case of duplicate properties the later spread object will replace the property of previous one
// const obj4 = {...obj1,...obj2};

// NOTE Rest Parameter (...)
// NOTE it packs the remaining values in an array :

// const numberArray = [1,2,3,4,5];
// const [one,two,...others] = numberArray;
// console.log(one,two,others);


// Destructuring in the function params

// function sum([a,b,c]) {
//     // console.log(item);
//     // const a = item[0];
//     // const b = item[1];
//     // const c = item[2];
//     return a+b+c;
// }
// console.log(sum([1,2,3]));

// function printNumber(...el) {
//     console.log(el);
//     el.forEach((n)=>{
//         console.log(n);        
//     })
// }
// printNumber(1,2,3,4,5,6,7,8);


// STRING METHODS 
// const str = 'Garv Bakliwal';
// console.log(str[5]);
// console.log(str.length);

// INCLUDES
// console.log(str.includes('s'));

// SLICE
// console.log(str.slice(0,4));
// console.log(str.slice(4,1));

// SUBSTRING
// console.log(str.substring(13,5));
// in the case of slice if the [start index > last index] it will return empty string ;
// in the case of substring the start will become end and vice-versa ;

// console.log(str.charAt(10));
// console.log(str.replace('Garv','GARV'));

// const newStr = '   hello   ';
// console.log(newStr);
// console.log(newStr.trimEnd());
// console.log(newStr.trim());

// console.log(str.indexOf('a'));
// console.log(str.lastIndexOf('a'));
// console.log(str.startsWith('g'));
// console.log(str.endsWith('l'));

//  split method convert string into array
// const str2 = str;
// console.log(str2.split(' ').reverse().join(' '));


// MATH Object

// abs
// console.log(Math.abs(-5));

// round
// console.log(Math.round(1.7));
// console.log(Math.round(-5.2));

// trunc
// console.log(Math.trunc(4.7));

// floor
// console.log(Math.floor(4.7));
// console.log(Math.floor(-4.7));

// ceil
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(-4.7));

// min , max
// console.log(Math.min(1,5,9));
// console.log(Math.max(1,5,9));

// random
// console.log(Math.trunc(Math.random()*10));

// Date Object
// const date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getDay());

// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// console.log(${hours}:${minutes}:${seconds});

// give epoch time
// console.log(date.getTime());
// give the local day date 
// console.log(date.toDateString());
// give the local time string
// console.log(date.toLocaleTimeString());