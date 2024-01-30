import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const $authInstance = axios.create({
    baseUrl: "https://connections-api.herokuapp.com"
})

const setToken = token => {
    $authInstance.defaults.headers.common.Authorization = `Bearer ${token}`  
}

export const apiRegisterUser = createAsyncThunk('auth/apiRegisterUser', async (formData, thunkApi) => {
    try {
        const { data } = await $authInstance.post('/users/signup', formData)
        setToken(data.token)
        return data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
}) 
