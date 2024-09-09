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