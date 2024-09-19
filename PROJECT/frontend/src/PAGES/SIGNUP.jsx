import React from 'react'
import {useForm} from 'react-hook-form'
import z from 'zod'

import {zodResolver} from '@hookform/resolvers/zod'

function Signup(){
  //schema for error show
  const schema = z.object({
    name : z.string().min(1,"name is required").max(40,"name cannot exceed 40 characters")})

  const {register , formState : {errors},handleSubmit} = useForm({resolver:zodResolver(schema)});
  const onSubmit =(data)=>{
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>
        <input type ='text'{...register('name')}/>

        <label htmlFor='phone'>PHONE</label>
        <input type ='number'{...register('PHONE')}/>

        <label htmlFor='email'>EMAIL</label>
        <input type='email'{...register('email')}/>

        <label htmlFor='password'>password</label>
        <input type ='password'{...register('name')}/>
        
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup