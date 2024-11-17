import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import todosReducer from "../slices/dataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer
  },
});
