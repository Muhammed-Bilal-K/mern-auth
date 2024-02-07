import React from "react";
import { increment, decrement } from "./reduxToolkit/ValueReducer";
import { useDispatch, useSelector } from "react-redux";

function Count() {
  const { value } = useSelector((state)=>{
    return state.value;
  })  
  console.log(value);
  const dispatch = useDispatch();

        // <button
        //   onClick={() => {
        //     dispatch(increment(1));
        //   }}
        // >
        //   +
        // </button>
        // <p>{value}</p>
        // <button
        //   onClick={() => {
        //     dispatch(decrement(-1));
        //   }}
        // >
        //   -
        // </button>
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <p>{value}</p>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>


        <button onClick={()=>{
            dispatch({
                type:"logout"
            });
        }}>logout</button>
      </div>
    </>
  );
}

export default Count;
