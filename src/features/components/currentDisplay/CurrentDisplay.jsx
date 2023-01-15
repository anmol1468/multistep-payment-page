import React from 'react'
import '../info/Info'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from './currentDisplaySlice';


function CurrentDisplay() {


  const currentDisplay = useSelector(state => state.currentDisplay)

  const dispatch = useDispatch()

  const nextHandler = () => {
    dispatch(nextStep())
    console.log(currentDisplay)
  }

  const backHandler = () => {
    dispatch(previousStep())
  }

  return (
    <div className='currentDisplay'>
      {currentDisplay.options[currentDisplay.currentNum]}
      <div className="currentDisplay__buttons">
        <button onClick={backHandler}>Go back</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  )
}

export default CurrentDisplay