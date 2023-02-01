import React from 'react'
import '../info/Info'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep, selectStep } from './currentDisplaySlice';


function CurrentDisplay() {

  const info = useSelector(state => state.info)
  const selectedPlan = useSelector(state => state.plan.type.name)

  const currentDisplay = useSelector(state => state.currentDisplay)

  const dispatch = useDispatch()

  const nextHandler = () => {
    const num = currentDisplay.currentNum

    if (num===0) {
      if (info.name.length>0 && info.email.includes('@') && info.phoneNum.length>=10) {
        dispatch(nextStep())
        return
      } else { alert('Please fill all the info correctly')
    return
    }
    }

    if (num===1) {
      if (selectedPlan) {
        dispatch(nextStep())
      return } else {
          alert('Please select your plan')
          return
        }
    }
    
    if (num >= 1) dispatch(nextStep())
  }

  const backHandler = () => {
    dispatch(previousStep())
  }

  return (
    <div className='currentDisplay'>
      {currentDisplay.options[currentDisplay.currentNum]}
      <div className="currentDisplay__buttons"
      style={{
        display: currentDisplay.currentNum===4 ? 'none': 'flex'
      }}
      >
        
        <div><button class={`previous-button ${currentDisplay.currentNum===0? 'hidden': ''}`} onClick={backHandler}>Go back</button></div>

        <div><button class='next-button' onClick={nextHandler}
        style={{
          display: currentDisplay.currentNum===3? 'none': 'initial'
        }}
        >Next</button>
        <button className="confirm-button"
        style={{
          display: currentDisplay.currentNum!==3? 'none': 'initial'
        }}
        onClick={nextHandler}
        >Confirm</button></div>
        
      </div>
    </div>
  )
}

export default CurrentDisplay