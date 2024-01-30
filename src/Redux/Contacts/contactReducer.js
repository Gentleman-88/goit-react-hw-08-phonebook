import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts  } from "services/api";



const contacts = {
    items: [],
    isLoading: false,
    error: null,
    filter: ""
}

const forPending = (state) => { state.isLoading = true };

const forRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contacts,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        }

    },
    extraReducers: (builder => {
        builder
            .addCase(fetchContacts.pending, forPending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addContact.pending, forPending)
            .addCase(addContact.rejected, forRejected)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload)
            })
            .addCase(deleteContact.pending, forPending)
            .addCase(deleteContact.rejected, forRejected)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            })
    })
});

export const {setFilter} = contactsSlice.actions

export const contactsReducer = contactsSlice.reducer;
