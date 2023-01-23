import React from 'react'
import '../info/Info'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from './currentDisplaySlice';


function CurrentDisplay() {


  const currentDisplay = useSelector(state => state.currentDisplay)

  const dispatch = useDispatch()

  const nextHandler = () => {
    dispatch(nextStep())
  }

  const backHandler = () => {
    dispatch(previousStep())
  }

  return (
    <div className='currentDisplay'>
      {currentDisplay.options[currentDisplay.currentNum]}
      <div className="currentDisplay__buttons">
        <button class='previous-button' onClick={backHandler}>Go back</button>
        <button class='next-button' onClick={nextHandler}>Next</button>
      </div>
    </div>
  )
}

export default CurrentDisplay