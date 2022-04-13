import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/Form";

const Title = ({ goSubmit, goChange, input }) => {
  const TitleTodos = {
    fontSize: "100px",
    fontWeight: "bolder",
    marginBottom: "10px",
    backgroundImage:
      "linear-gradient(to right, #e9ed02 40%, #0cb80e 60%, #0320fd 50%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  };

  const CustomForm = {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    border: "1px solid #ccc",
    position: "relative",
    marginBottom: "3rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  };
  const CustomInput = {
    width: "100%",
    height: "50px",
    padding: "0 20px",
    borderRadius: "50px",
    outline: "none",
    border: "0",
    fontSize: "20px",
    position: "relative",
  };
  const CustomSubmit = {
    width: "15%",
    height: "100%",
    padding: "10px",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    border: "0",
    borderRadius: "50px",
    fontSize: "20px",
    color: "rgb(92, 87, 87)",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const CustomUl = {
    listStyle: "none",
  };
  const CustomContainerListItem = {
    width: "45%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    padding: "15px 25px",
    borderRadius: "10px",
    marginBottom: "20px",
  };
  const CustomList = {
    width: "100%",
    fontSize: "1.25rem",
    textAlign: "left",
    paddingLeft: "10px",
  };
  const CustomDelete = {
    borderRadius: "50px",
    padding: "10px 12px",
    border: "0",
    backgroundColor: "#ccc",
  };

  const todoList = useSelector((state) => state.todolist.value);
  console.log(todoList);

  const dispatch = useDispatch();

  let valueCheck = false;

  function setCheck(id) {
    valueCheck = !valueCheck;
    let getValCheck = document.getElementById("goCheck-" + id);
    console.log(getValCheck, id);
    let garis = document.getElementById("garis-" + id);
    if (getValCheck.checked == true) {
      console.log("true", garis);
      garis.style.textDecoration = "line-through";
    } else {
      console.log("false", garis);
      garis.style.textDecoration = "";
    }
  }

  return (
    <div>
      <h1 style={TitleTodos}>todos</h1>

      <form onSubmit={goSubmit} style={CustomForm}>
        <input
          type="text"
          style={CustomInput}
          value={input}
          onChange={goChange}
          placeholder="Add Todo..."
        />
        <input type="submit" style={CustomSubmit} />
      </form>

      <ul style={CustomUl}>
        {todoList.map((item) => (
          <div style={CustomContainerListItem} key={item.id}>
            <input
              type="checkbox"
              defaultChecked={valueCheck}
              onChange={() => setCheck(item.id)}
              id={"goCheck-" + item.id}
            />
            <li style={CustomList}>
              <p id={"garis-" + item.id}>{item.title}</p>
            </li>
            <button
              style={CustomDelete}
              onClick={() => dispatch(removeTodo({ id: item.id }))}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Title;
