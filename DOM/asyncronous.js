//asyncronous code 
console.log('window');
console.log('hello');
setTimeout(()=>{
    console.log('this is asyncronous code');
},2000);

console.log('hii');

//callback
function test(callback){
    const data ='hello';
    callback(data)
}

function greet(data){
console.log(data)
}
test(greet);

// code with asynchronise and function
function test(callback){
    setTimeout(()=>{
    const data ='hello';
    callback(data)
},3000)}

test((data)=>{
    console.log(data);
})


//test = higher order function which accepts callbacks as a parameters
//greet = callback which are passing in the parameter of higer order function

function step1(callback){
    setTimeout(()=>{
        callback();
        console.log('step 1 completed');
    },1000)
}

function step2(callback){
    setTimeout(()=>{
        callback();
        console.log('step 2 completed');
    },1000)
}

function step3(callback){
    setTimeout(()=>{
        callback();
        console.log('step 3 completed');
    },1000)
}

function step4(callback){
    setTimeout(()=>{
        callback();
        console.log('step 4 completed');
    },1000)
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})

//PROMISES

//it is a javascript object which is just like placeholder for the result of the asynchronous operation like fetching dtaa from the apis..

//promises are always returns by function

//NOTE creating promise ;

const willyoupassinexam =new Promise
((resolve,reject)=>{
    reject('pass');
})

console.log(willyoupassinexam);

function fetchdata(){
    return new Promise((resolve,reject)=>{
       const data = 'hello we are learning promises' 
       if(Math.random() > .5){
        resolve(data)
       }
       else{
        reject('this is rejected')
       }
    })

}
//NOTE in case promise is fulfilled we have to use .then() method
//NOTE in case promise is reject we have to use .catch() method

fetchdata().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('it will run always either youur promises is rejected or fulfilled');
})

//calling an apis using fetch() function 
//NOTE fetch function always return promise 

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