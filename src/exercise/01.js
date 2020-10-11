// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function countReducer(state, action) {
  if (typeof action === 'function') {
    return action(state)
  }
  return {...state, ...action}
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  const [{count}, setCount] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "action" - the value passed to setCount
  const increment = () => setCount(cb => ({count: cb.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
