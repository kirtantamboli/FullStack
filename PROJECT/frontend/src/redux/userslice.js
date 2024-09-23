import { createSlice, rejectedWithValue } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const register = createAsyncThunk('/user/login',async(data,{rejectWithValue})=>{
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
    initialState
})

export default userSlice.reducer