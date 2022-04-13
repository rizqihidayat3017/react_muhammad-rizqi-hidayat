import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/Form";
import { Sidebar } from "./Sidebar";
import Title from "./Title";

export default function Home() {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem !== "") {
      const todoItems = {
        id: Math.random(),
        title: todoItem,
        complited: false,
      };

      dispatch(addTodo(todoItems));

      setTodoItem("");
    } else {
      alert("Masukkan Inputan");
    }
  };
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-5">
          <Title
            goSubmit={handleSubmit}
            goChange={handleChange}
            input={todoItem}
          />
        </div>
      </div>
    </>
  );
}
