import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./Form";

export default configureStore({
  reducer: {
    todolist: firstReducer,
  },
});
