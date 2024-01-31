import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLoginUser, apiRegisterUser } from "services/api.auth";



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
    extraReducers: (builder) => builder
        .addCase(apiRegisterUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoading = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(apiLoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoading = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addMatcher(
            isAnyOf(apiRegisterUser.pending, apiLoginUser.pending),
            state => {
                state.isLoading = true;
                state.error = null;
            }) 
        .addMatcher(
            isAnyOf(apiRegisterUser.rejected, apiLoginUser.rejected),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
        })
});

export const authReducer = authSlice.reducer