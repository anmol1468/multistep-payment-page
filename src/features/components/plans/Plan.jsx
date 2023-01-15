import React from 'react'
import Arcade from '../../../assets/images/icon-arcade.svg'
import Advanced from '../../../assets/images/icon-advanced.svg'
import Pro from '../../../assets/images/icon-pro.svg'
import '../../../index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFrequency, changeType } from './planSlice'

function Plan() {

  const dispatch = useDispatch();
  const plan = useSelector(state => state.plan)

  const toggleFrequency = () => {
    return dispatch(changeFrequency())
  }

  const selectOption = (e) => {
    e.classList('selected')
  }

  return (
    <div className='plan'>
      <h2>Select you plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form action="">
        <div className="plan__type">
          <div className='option selected' onClick={(e) => {
            selectOption(e)
          }}>
            <img src={Arcade} alt="arcade-logo" />
            <h3>Arcade</h3>
            {plan.frequency==='monthly' ?<p>$9/mo</p>: <div><p>$90/yr</p><p>2 months free</p></div> }
          </div>
          <div className='option' onClick={(e) => {
            selectOption(e)
          }}>
            <img src={Advanced} alt="advanced-logo" />
            <h3>Advanced</h3>
            {plan.frequency==='monthly' ?<p>$12/mo</p>: <div><p>$120/yr</p><p>2 months free</p></div> }
          </div>
          <div className='option' onClick={(e) => {
            console.log(e.target)
            selectOption(e.target)
          }}>
            <img src={Pro} alt="pro-logo" />
            <h3>Pro</h3>
            {plan.frequency==='monthly' ?<p>$15/mo</p>: <div><p>$150/yr</p><p>2 months free</p></div> }
          </div>
        </div>
        <div className="plan__frequency">
          <p>Monthly</p>
          <input type="checkbox" id="switch" /><label for="switch" onClick={toggleFrequency}>Toggle</label>
          <p>Yearly</p>
        </div>
      </form>
    </div>
  )
}

export default Plan