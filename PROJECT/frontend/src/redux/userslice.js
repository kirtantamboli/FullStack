import { createSlice, rejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { toast } from "sonner";

export const Register = createAsyncThunk('/user/login',async(data,{rejectWithValue})=>{
    try{
    const res = await axios.post('http://localhost:3000/api/regiter',data) ;
    return res.data
    }catch(error){
        return rejectedWithValue(error)
    }
})

const initialState ={
    loading : false ,
    error : null
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    extraReducers :(builder)=>{
        //first pending
        //handling api -- pending fulfilled rejected
        builder.addCase(Register.pending,(state)=>{
            state.loading = true
        }).addCase(Register.fulfilled,(state)=>{
            state.loading = false
        }).addCase(Register.rejected,(state,action)=>{
            console.log(action.payload);
            state.error = action.payload
            toast.error(action.payload.response.data.message)
        })

    }
})

export default userSlice.reducer