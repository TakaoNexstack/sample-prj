import React from "react"
import { AppleCounter } from "../components/AppleCounter"
import { TextMirror } from "../components/TextMirror"

export const HomePage = () => {
  return (
    <div className="HomePage">
      <AppleCounter />
      <hr />
      <TextMirror />
    </div>
  )
}
