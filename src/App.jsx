import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./components/actions"

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)

  return (
    <>
      <div>
        <h1>Counter {counter}</h1>
        <button
          onClick={() => {
            dispatch(increment())
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </button>

        {isLogged ? <h3>Information is valuable</h3> : ""}
      </div>
    </>
  )
}

export default App
