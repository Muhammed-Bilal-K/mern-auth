import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Number() {
  const [datas, setDatas] = useState([]);
  const { value, todo } = useSelector((state) => {
    return state;
  });
  // const datav = useSelector((state) => {
  //   return state.todo;
  // });
  const dispatch = useDispatch();
  console.log(value);
  console.log(todo);
  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "value_change",
            payload: -1,
          });
        }}
      >
        -
      </button>
      <p>{value}</p>
      <button
        onClick={() => {
          dispatch({
            type: "value_change",
            payload: 1,
          });
        }}
      >
        +
      </button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        onChange={(e) => {
          setDatas(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({
            type: "addData",
            payload: datas,
          });
        }}
      >
        add
      </button>
    </>
  );
}

export default Number;
