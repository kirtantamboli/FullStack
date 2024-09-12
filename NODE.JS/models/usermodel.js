const mongoose =require ('mongoose')

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true 
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    age :{
        type : Number,
        required :true,
        unique : true
    }
})

const user = mongoose.model('user','userSchema');
//in mongoose we say collection a model

//name ,email,age
module.exports = user ;