import React, { useEffect, useState } from "react"
import "./AppleCounter.css"

export const AppleCounter = () => {
  const [appleCount, setAppleCount] = useState(0)
  const [evenOrOdd, setEvenOrOdd] = useState("Even")

  //   const addApples = (randomValue) => {
  //     setAppleCount(appleCount + randomValue)
  //   }
  const generateRandom = () => {
    return (Math.round(Math.random() * 10) % 3) + 1 // 1 or 2 or 3
  }

  useEffect(() => {
    setEvenOrOdd(appleCount % 2 === 0 ? "Even" : "Odd")
  }, [appleCount])

  return (
    <div className="AppleCounter">
      <p>
        🍎<b>Count</b>: {appleCount}
      </p>
      <p>Even or odd? {evenOrOdd}</p>
      <br />
      <button onClick={() => setAppleCount(appleCount + generateRandom())}>
        Add Some Apples
      </button>
    </div>
  )
}
