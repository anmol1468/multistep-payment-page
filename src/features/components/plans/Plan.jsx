import React from 'react'
import Arcade from '../../../assets/images/icon-arcade.svg'
import Advanced from '../../../assets/images/icon-advanced.svg'
import Pro from '../../../assets/images/icon-pro.svg'
import '../../../index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeFrequency, changeType } from './planSlice'


const plansData = [
  {
    name: 'Arcade',
    monthly: 9,
    yearly: 90,
    logo: Arcade
  },
  {
    name: 'Advanced',
    monthly: 12,
    yearly: 120,
    logo: Advanced
  },
  {
    name: 'Pro',
    monthly: 15,
    yearly: 150,
    logo: Pro
  }
]

function Plan() {

  const dispatch = useDispatch();
  const planSelected = useSelector(state => state.plan)

  const toggleFrequency = () => {
    dispatch(changeType( {
      name: '',
      rate: undefined
    }))
    return dispatch(changeFrequency())
  }

  const selectOption = (plan) => {
    dispatch(changeType( {
      name: plan.name,
      rate: planSelected.frequency==='monthly' ? plan.monthly: plan.yearly
    }))
  }

  return (
    <div className='plan'>
      <h2>Select you plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form action="">

        <div className="plan__type">
          
        {
          plansData.map((plan) => {
            return <div className={`option ${plan.name===planSelected.type.name? 'selected': ''}`} onClick={() => {
            selectOption(plan)
          }}>
            <img src={plan.logo} alt="advanced-logo" />
            <h3>{plan.name}</h3>
          {planSelected.frequency==='monthly' ?<p>{`$${plan.monthly}/mo`}</p>: <div><p>{`$${plan.yearly}/yr`}</p><p className='free'>2 months free</p></div> }
          </div>
          })
        }
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