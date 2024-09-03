import React from 'react'
import { useState } from 'react'
function Reducer(){
    const [count,setcount]=useState(0)
    const handleinrement = () => {
        setcount(count +1);
    }
    const handledecrement = () => {
        setcount(count -1);
    }
    return(
        <div>
        <h1 className="text-center m-5 font-semibold text-3xl">use reducer hook</h1>
        </div>
     
    )
}

//usereducer

//NOTE = initialstate first we have to define the initial state in out application when using use reducer , always a object

//reducer function =>(state ,action) => {        }

//NOTE action => {
    // type : '',
    //payload : '' 
    //}

//dispatch = {
// NOTE always accept a action , action is a javascript  }