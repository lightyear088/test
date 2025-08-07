import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
// ctrl click
function App() {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const arr = [1, 3, 4, 5]

  const fun = () => {
    setCount((count) => count + 1)
    console.log(count % 2 == 1)
    setIsVisible(count % 2 == 1)
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={fun}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {
          arr.map((item) => { return <div>{item}</div> })
        }
      </div>
      {
        isVisible ? <Counter click={setCount} value={count}></Counter> : <></>
      }

    </>
  )
}

export default App
