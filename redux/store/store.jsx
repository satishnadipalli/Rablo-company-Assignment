import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../silces/todoSlices";
import userSlice from "../silces/userSlice";

export const store = configureStore({
    reducer:{
        user: userSlice,
        todos: todoSlice
    }
});