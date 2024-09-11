//easiest way to make api through express
const express = require('express');
const product = require('express');
const app = express();
//console.log(app);
app.get('/about',(req,res)=>{
    res.send('hello from express');
})

app.use(express.json())

app.use((req,res,next)=>{
    console.log('middleware first');
    next()
})

app.use((req,res,next)=>{
    console.log('middleware second');
    next()
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

api.get('/api/v1/getproduct',(req,res)=>{
    // res.send(product);
    res.status(200).json({
        length : Product.length,
        data : product  
    })
    // res.status(200).send(product)
})
//we have t0 make collection to save apis
api.get('./api/v1/singleproduct/:id',(req,res)=>{
    req.params.id
    console.log(req.params)
    const id = parseInt(req.params)
    console.log(id);
    const filterProduct = product.filter((product)=>{
        return product.id === id 
    })
    
})
    res.json({
        data :filterProduct  
    })

app.listen(3000,()=>{
    console.log("server is running");
    
})

//MIDDLEWARE IN EXPRESS JS 
// we can create middleware using app.use() method
//use mehod will acceppt callback
//use() 