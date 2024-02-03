import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./redux/store";

function App() {
  const Svalue = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const handleShow = (e) => {
    const check = e.target.checked;
    dispatch({
      type:"show-label",
      // payload : !Svalue.showData
      payload : check
    })
  }

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button>{Svalue.value}</button>
      <button
        onClick={() => {
          dispatch({
            type: "valueChange",
            payload: -1,
          });
        }}
      >
        -
      </button>

      <input type="checkbox" checked={Svalue.showData} onChange={handleShow}/>
      <div style={{backgroundColor: Svalue.showData ? "green" : "red"}}>
        <h1>hello</h1>
      </div>
    </>
  );
}

export default App;
