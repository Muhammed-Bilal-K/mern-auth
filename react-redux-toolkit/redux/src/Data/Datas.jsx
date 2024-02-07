import React from 'react'

function Datas() {
    const handleAddTodo = (e) => [
        console.log(e)
    ]
  return (
    <div>
    <input
        type="text"
        placeholder="Add Todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  )
}

export default Datas