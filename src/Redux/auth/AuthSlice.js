import { createSlice } from "@reduxjs/toolkit";



const user = {
    token: null,
    userData: null,
    isLoggedIn: false,
    error: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: "contacts",
    initialState: user,
});

export const authReducer = authSlice.reducer