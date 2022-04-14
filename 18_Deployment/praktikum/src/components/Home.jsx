import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Title from "./Title";

const intialstate = [
  {
    id: 1,
    title: "Mengerjakan React Redux",
    completed: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

export default function Home() {
  const [items, setItems] = useState(intialstate);
  const [todoItem, setTodoItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem !== "") {
      const todoItems = {
        id: Math.random(),
        title: todoItem,
        complited: false,
      };

      const itemsNew = [...items];
      itemsNew.push(todoItems);

      setTodoItem("");
      setItems(itemsNew);
    } else {
      alert("Masukkan Inputan");
    }
  };
  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };
  const handleDelete = (id) => {
    const newItems = [...items];
    const ItemUpdate = newItems.filter((item) => item.id !== id);

    setItems(ItemUpdate);
  };
  return (
    <div className="grid grid-cols-6 gap-4">
      <div>
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Title
          goSubmit={handleSubmit}
          goValue={todoItem}
          goChange={handleChange}
          items={items}
          goDelete={handleDelete}
        />
      </div>
    </div>
  );
}
