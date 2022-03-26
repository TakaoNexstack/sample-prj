import React from "react"
import "./BirthdayList.css"

export const BirthdayList = () => {
  const BIRTHDAYS = [
    { name: "CarL", birthday: "Feb 2" },
    { name: "tiFFany", birthday: "Dec 17" },
    { name: "Lucas", birthday: null },
    { name: "Rose", birthday: "" },
  ]
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }
  return (
    <div className="BirthdayList">
      <h1>Neat Birthday List</h1>
      <ul className="list">
        {BIRTHDAYS.map((item, index) => (
          <li key={index}>
            {capitalize(item.name)} ({item.birthday || "unknown"})
          </li>
        ))}
      </ul>
    </div>
  )
}
