import { createSlice } from "@reduxjs/toolkit";

const todoData = [
  { id: 1, title: "Mengerjakan Exercise", complited: false },
  { id: 2, title: "Mengerjakan Assignment", complited: false },
  { id: 3, title: "Mengerjakan Global State Management", complited: false },
];

const initialState = {
  value: todoData,
};

const firstReducer = createSlice({
  name: "formReducer",
  initialState,
  reducers: {
    // Tambahkan TodoList
    addTodo: (state, action) => {
      // Peringatan Jika title Masih Kosong
      if (action.payload.title === "") {
        alert("Masukkan Data Inputan");
      } else {
        state.value.push(action.payload);
      }
    },
    // Hapus TodoList
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = firstReducer.actions;
export default firstReducer.reducer;
