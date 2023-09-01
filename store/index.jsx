import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import postsReducer from "./posts-slice"
import usersReducer from "./users-slice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
})