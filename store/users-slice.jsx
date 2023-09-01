import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name: "Ogedengbe wisdom"},
    {id: "1", name: "Adams Rashidat"},
    {id: "2", name: "Bethel Oges"}
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;