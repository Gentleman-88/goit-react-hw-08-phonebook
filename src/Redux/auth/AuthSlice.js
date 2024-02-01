import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLoginUser, apiRefreshUser, apiRegisterUser } from "services/api";



const user = {
    token: null,
    userData: null,
    isLoggedIn: false,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: user,
    extraReducers: builder =>
        builder
            .addCase(apiRegisterUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(apiLoginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(apiRefreshUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLoggedIn = true;
                state.userData = action.payload;
            })
            .addMatcher(
                isAnyOf(
                    apiRegisterUser.pending,
                    apiLoginUser.pending,
                    apiLoginUser.pending,
                ),
                state => {
                    state.isLoading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    apiRegisterUser.rejected,
                    apiLoginUser.rejected,
                    apiLoginUser.rejected,
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            ),
});

export const authReducer = authSlice.reducer;