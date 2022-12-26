import React from 'react'
import { getMoviesUpcoming } from './service/api'

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          getMoviesUpcoming(1).then((r) => {
            console.log(r)
          })
        }}
      >
        hello2
      </button>
    </div>
  )
}

export default App
