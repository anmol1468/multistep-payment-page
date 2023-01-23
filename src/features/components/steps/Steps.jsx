import React from 'react'
import { useSelector } from 'react-redux'

const steps = [
  {
    number: 1,
    description: 'YOUR INFO'
  },
  {
    number: 2,
    description: 'SELECT PLAN'
  },
  {
    number: 3,
    description: 'ADD-ONS'
  },
  {
    number: 4,
    description: 'SUMMARY'
  },
]

function Steps() {

  const currentDisplay = useSelector(state => state.currentDisplay.currentNum + 1);

  return (
    <div className='steps'>

      {steps.map((step) => {
        return <div className="step" key={step.number}>
        <div className={`step__number ${step.number === currentDisplay? 'selected': ''}`}>{step.number}</div>
        <div className="step__name">
          <p>STEP {step.number}</p>
          <h4>{step.description}</h4>
        </div>
      </div>
      })}

      
    </div>
  )
}

export default Steps