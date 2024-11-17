import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk

const getTodos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
};

export const fetchTodos = createAsyncThunk(
  "fetchTodos",
  async (userId, thunkAPI) => {
    console.log({ userId }, { thunkAPI });
    const response = await getTodos();
    console.log(response, ">>>>>>");
    return response.data;
  }
);
const initialState = {
  data: null,
};

// Then, handle actions in your reducers:
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    success(state, action) {
        console.log("API successfull")
      state.data = action.payload;
    },
    reject() {
      console.log("API is rejected");
    },

    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      console.log("API Calling....");
      //   state.data = action.payload;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("API is successfull", action.payload);
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("API is rejected");
    });
  },
});
const todosReducer = todoSlice.reducer;
export const { success, reject } = todoSlice.actions;

export default todosReducer;
