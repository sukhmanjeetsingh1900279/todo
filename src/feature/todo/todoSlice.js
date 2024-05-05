import { createSlice } from "@reduxjs/toolkit";

const task = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: task },
  reducers: {
    addTask: (state, action) => {
      // const task = { id: Date.now, text: action.text, done: false };
      state.todos.push(action.payload);
    },
    updateTask: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
