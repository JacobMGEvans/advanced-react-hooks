// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import React, {createContext, useContext, useState} from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = createContext()
function CountProvider(props) {
  const [count, setCount] = useState(0)
  const value = [count, setCount]
  // //done 🐨 create a CountProvider component here that does this:
  //  //done 🐨 get the count state and setCount updater with React.useState
  //   🐨 create a `value` array with count and setCount
  //   🐨 return your context provider with the value assigned to that array and forward all the other props
  //   💰 more specifically, we need the children prop forwarded to the context provider
  return <CountContext.Provider value={value} {...props} />
}

function useCount() {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error(
      `Context ${context}: useCount must be rendered within the CountProvider`,
    )
  }

  return context
}

function CountDisplay() {
  const [count] = useCount()
  // 🐨 get the count from useContext with the CountContext

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  // 🐨 get the setCount from useContext with the CountContext
  const increment = () => setCount(c => c + 1)

  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
