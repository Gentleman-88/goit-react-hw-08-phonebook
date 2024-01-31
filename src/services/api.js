import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const $authInstance = axios.create({
    baseURL: "https://connections-api.herokuapp.com/"
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
});

export const apiLoginUser = createAsyncThunk('auth/apiLoginUser', async (formData, thunkApi) => {
    try {
        const { data } = await $authInstance.post('/users/login', formData);
        setToken(data.token);
        return data;
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});




export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await $authInstance.get('/contacts')
        setToken(data.token)
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})


export const addContact = createAsyncThunk("contacts/addContact", async (dataForAdd, thunkAPI) => {
    try {
        const { data } = await $authInstance.post('/contacts', dataForAdd)
        setToken(data.token)
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const { data } = await $authInstance.delete(`/contacts/${contactId}`);
        setToken(data.token)
        return data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});