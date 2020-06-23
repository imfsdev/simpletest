import React, { useState } from 'react'
import './App.css'

function App() {
  const [clicked, setClicked] = useState(false)
  const [clickedId, setClickedId] = useState('')

  const typeArray = [
    { id: 0, content: 'Blood Glucose' },
    { id: 1, content: 'Medication' },
    { id: 2, content: 'Food Tracking' },
    { id: 3, content: 'Exercise' },
    { id: 4, content: 'Weight Management' },
    { id: 5, content: 'Blood Pressure' },
    { id: 6, content: 'A1C' },
  ]

  const handleOnClick = (index) => {
    setClicked(true)
    setClickedId(index)
  }
  return (
    <div className="container">
      <div className="title">What are your main areas of focus?</div>
      <div className="sub-title">
        This will help us build a personalized experience for you
      </div>
      <div className="button-container">
        {typeArray.map((item, index) => (
          <button
            key={index}
            id={item.id}
            onClick={() => handleOnClick(index)}
            className={clicked && index === clickedId ? 'active' : ''}
          >
            {item.content}
          </button>
        ))}
      </div>
      <div className="footer">
        <button>Back</button>
        <button>Done</button>
      </div>
    </div>
  )
}

export default App
