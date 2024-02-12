import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1) 
        },
        removeAllUsers(state, action) {
            return [];
        },
    }
})

const { addUser, removeUser, removeAllUsers } = userSlice.actions;

export { userSlice, addUser, removeUser, removeAllUsers };