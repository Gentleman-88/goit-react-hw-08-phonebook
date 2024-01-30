import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65b3890b770d43aba479f6c2.mockapi.io/contacts"

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const result = await axios.get('/contacts')
        return result.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})


export const addContact = createAsyncThunk("contacts/addContact", async (dataForAdd, thunkAPI) => {
    try {
        const result = await axios.post('/contacts', dataForAdd)
        return result.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const result = await axios.delete(`/contacts/${contactId}`);
        return result.data;
    } catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
});