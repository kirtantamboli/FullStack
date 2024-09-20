import React from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
const Signup = () => {

    const schema = z.object({
        name : z.string().min(1,"Name is Required").max(40,"name cannot exceed 40 characters"),
        email : z.string().email('email is required'),
        phone : z.string().min(10,"min 10 digit is Required"),
        password : z.string().min(8,"password must contain 8 digits and characters").regex(/[0-9]/,"password must contain atleast one num").regex(/[A-Z]/,'password must contain atleat one uppercase').regex(/[a-z]/,"password must contain atleast one lowercase").regex(/[\w_]/,"password must contain atleat one special symbol"),
    })

    const{register , formState:{errors} , handleSubmit} = useForm({
        resolver:zodResolver(schema)
    })
    const onSubmit = (data) =>{
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex'>
            <label htmlFor="name">Name</label>
            <input type="text" {...register('name')}/>
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

            <label htmlFor="email">Email</label>
            <input type="email" {...register('email')}/>

            <label htmlFor="phone">Phone</label>
            <input type="tel" {...register('phone')}/>

            <label htmlFor="password">Password</label>
            <input type="password" {...register('phone')}/>

            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup