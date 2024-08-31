import React, { useState } from 'react'
import { useEffect } from 'react'
const Render = () => {

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        console.log('this will run only one time initially when component mount');
    },[]);
    useEffect(()=>{
        console.log('this will run everytime');
    });
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('this will run only when count change');
    },[count]);
    const[username,setUsername] = useState('');
    useEffect(()=>{
        console.log('this will run only when input change');
    },[username]);

  return (
    <div>
        <h1>Render Component</h1>
        <button onClick={()=>(setCount(count+1))} className='border-solid border-2 border-black'>Increase</button>
        <h1>
            {count}
        </h1>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} />
    </div>
  )
}

export default Render