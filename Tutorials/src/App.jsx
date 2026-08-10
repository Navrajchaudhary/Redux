import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [num, setNum] = useState(10)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>decrement</button>

      <input type="number" value={num} onChange={(e)=> setNum(e.target.value)} />
      <button onClick={() => {
        dispatch(incrementByAmount(parseInt(num)))
      }}>Increment by amount</button>
    </div>
  )
}

export default App
