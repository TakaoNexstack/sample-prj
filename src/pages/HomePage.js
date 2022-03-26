import React from "react"
import { AppleCounter } from "../components/AppleCounter"
import { BirthdayList } from "../components/BirthdayList"
import { ListEditor } from "../components/ListEditor"
import { TextMirror } from "../components/TextMirror"

export const HomePage = () => {
  return (
    <div className="HomePage">
      <ListEditor />
      <hr />
      <AppleCounter />
      <hr />
      <TextMirror />
      <hr />
      <BirthdayList />
      <hr />
    </div>
  )
}
