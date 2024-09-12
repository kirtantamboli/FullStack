const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
app.listen(8000,()=>{
    console.log('server is running on port 8000');
})
//boiler plate

mongoose.connect('')

const userSchema = new mongoose.Schema({
    
})