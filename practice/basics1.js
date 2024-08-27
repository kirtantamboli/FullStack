//Asynchrnous js
console.log(window)
console.log('hello');

//NOTE setTimeout takes two params one is callback function , second is time which we pass in milliseconds , 1 sec = 1000 millisec

// setTimeout(()=>{
//     console.log('this is asynchronous code')
// },2000) ;


console.log('hi');

// callbacks ;


function test(callback){
 setTimeout(()=>{
     const data = 'hello'
   callback(data)
    },3000)
}

// function greet(data){
// console.log(data)
// }

test((data)=>{
    console.log(data)
});

//test = Higher order function which accepts callback as a params
//greet = callback function which are passing in the paramter of higher order function

function step1(callback){
    setTimeout(()=>{
        callback();
        console.log('step 1 completed')
    },1000)

}

function step2(callback){
    setTimeout(()=>{
        callback()
        console.log('step 2 is completed')
    },1000)
}
function step3(callback){
    setTimeout(()=>{
        callback()
        console.log('step 3 is completed')
    },1000)
}
function step4(){
    setTimeout(()=>{
        console.log('step 2 is completed')
    },1000)
}

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

//PROMISES : 
//it is a javascript object which is just like placeholder for the result of the  asynchronous operations like fetching data from the apis ..

//Promises are always returns by functions  

//NOTE Creating promise ;

const willYouPassInExam = new Promise((resolve,reject)=>{
 reject('fail')
})

console.log(willYouPassInExam);

function fetchData(){
    return new Promise((resolve,reject)=>{
    const data = 'hello we are learning promises'
  if(Math.random() > .5){
    resolve(data)
  }else{
    reject('this is rejected')
  }
    })
}

//NOTE in case promise is fulfilled we have to use .then() method
//NOTE in case promise is reject we have to use .catch() method

fetchData().then((data)=>{
    console.log(data)
}).catch((err)=>{
console.error(err)
}).finally(()=>{
    console.log("it will run always either your promise fulfilled or rejected")
})

//calling an apis using fetch() function
//NOTE fetch function always returns promise

fetch('https://restcountries.com/v3.1/all').then((res)=>{
   return res.json()
}).then((data)=>{
   
    data.forEach(element => {
        console.log(element)
        const h1 = document.createElement('h1')
        const img = document.createElement("img");
        img.style.width = '200px'
        img.src = element.flags.svg
        h1.innerText = element.name.common;
        document.body.appendChild(h1)
        document.body.appendChild(img)
    });
})