import {createSlice} from "@reduxjs/toolkit";

const initialState = {count: 0};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament(state) {
            state.count++
        },
        decreament(state) {
            state.count--
        },
        increase(state, action) {
            state.count += action.payload
        },
        reset(state) {
            state.count = 0
        }
    }
})

export const {increament, decreament, increase, reset} = counterSlice.actions;
export default counterSlice.reducer