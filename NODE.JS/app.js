//easiest way to make api through express
const express = require('express');

const app = express();
// console.log(app);
app.get('/about',(req,res)=>{
    res.send('hello from express');
})


//creating server using express ;

app.listen(3000,()=>{
    console.log('server is running through express');
    
})

//task create an array of object of the userdata and send it via api which have url route 'gesture' to send the array of the object you can use res.json({
//data :userdata
//}) 
// const userData = [{username : 'abc', age: 22},{username :'xyz',age : 23}]

//note read
//accepts two params first is 'url for api' second is function

app.get('/api/v1/getproduct',(req,res)=>{
    res.send(product);
})
//we have t0 make collection to save apis
