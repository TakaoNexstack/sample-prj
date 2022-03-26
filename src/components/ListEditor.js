import React, { useState } from "react"
import "./ListEditor.css"

export const ListEditor = () => {
  const givenArray = ["a", "b", "c", "d", "e"]

  const [items, setItems] = useState(givenArray)
  const [inputVal, setInputVal] = useState("")

  const deleteItem = (index) => {
    setItems(items.slice(0, index).concat(items.slice(index + 1))) //  slice the array into 2 parts, leave the index item, then rejoin
  }
  const addItem = (newItem) => {
    setItems([...items, newItem]) //  add new item behind the current items
  }

  return (
    <div className="ListEditor">
      <h1>Display {"&"} Edit List</h1>
      <input
        type="text"
        length={15}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        onClick={() => addItem(inputVal)}
        disabled={!inputVal.trim().length} //  disable when input is empty
      >
        Add Item
      </button>
      <h2>Output:</h2>
      <ul className="list">
        {items.map((item, index) => (
          <li
            key={+new Date() + Math.random()}
            className="list-item"
            onClick={() => deleteItem(index)}
          >
            <span className="list-item-content">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
