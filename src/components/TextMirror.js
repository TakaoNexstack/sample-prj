import React, { useState } from "react"

export const TextMirror = () => {
  const [inputVal, setInputVal] = useState("")

  return (
    <div className="TextMirror">
      <h1>Text Mirror</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      ></input>
      <p>{[...inputVal].reverse().join("")}</p>
      {/* inputVal => "hello"
      [...inputVal] => ["h", "e", "l", "l", "o"]
      [...inputVal].reverse() => ["o", "l", "l", "e", "h"]
      [...inputVal].reverse().join("") => "olleh" */}
    </div>
  )
}
