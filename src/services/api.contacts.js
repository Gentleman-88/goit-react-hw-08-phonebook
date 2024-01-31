import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const $contactInstance = axios.create({
    baseUrl: "https://connections-api.herokuapp.com"
})

const setToken = token => {
    $contactInstance.defaults.headers.common.Authorization = `Bearer ${token}`  
}

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data } = await $contactInstance.get('/contacts')
        setToken(data.token)
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})


export const addContact = createAsyncThunk("contacts/addContact", async (dataForAdd, thunkAPI) => {
    try {
        const { data } = await $contactInstance.post('/contacts', dataForAdd)
        setToken(data.token)
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const { data } = await $contactInstance.delete(`/contacts/${contactId}`);
        setToken(data.token)
        return data
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});




// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
//     try {
//         const result = await axios.get('/contacts');
//         return result.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// })


// export const addContact = createAsyncThunk("contacts/addContact", async (dataForAdd, thunkAPI) => {
//     try {
//         const result = await axios.post('/contacts', dataForAdd);
//         return result.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// })

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
//     try{
//         const result = await axios.delete(`/contacts/${contactId}`);
//         return result.data;
//     } catch (e){
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });