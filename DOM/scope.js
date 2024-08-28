//note scope 
// block 
// function 
// lexical scoping 


// closures
 function greeting(){
    const msg = 'hello how are you'
    return function(){
        console.log(msg)
    }
 }

 const fn = greeting();
 fn();
 //vite and create react tools
