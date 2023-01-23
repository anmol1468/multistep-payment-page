import React from 'react'
import '../../../index.scss'
import tick from '../../../assets/images/icon-checkmark.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addAddOn, removeAddOn } from './addionalSlice'

const addonsData = [
  {
    name: 'Online Service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10
  },
  {
    name: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20
  }
]

function Addionals() {

  const dispatch = useDispatch();

  const frequencySelected = useSelector(state => state.plan.frequency)
  const selectedAddOns = useSelector(state => state.addOns.selectedAddOns)

  const toggleAddOn = (addOn) => {
    let alreadySelected = false;
    // console.log('this', selectedAddOns)

    selectedAddOns.forEach((name) => {
      if (addOn.name===name.name) {
        alreadySelected = true 
        return
      }
    })

    alreadySelected ? dispatch(removeAddOn(addOn)) : dispatch(addAddOn(addOn));

  }

  return (
    <div className='addionals'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>

      {
        addonsData.map((addOn) => {

      let isSelected = false;

      selectedAddOns.forEach((name) => {
      if (addOn.name===name.name) {
        isSelected = true 
        return
      }
    })

          return <div key={addOn.name} className={`add-on ${isSelected? 'selected': ''}`}>
        <div className={`add-on__tick ${isSelected? 'selected': ''}`} onClick={
          () => { return toggleAddOn(addOn)}
        }>
          <img src={tick} alt="nothing important" />
        </div>
        <div className="add-on__info">
          <h4>{addOn.name}</h4>
          <p>{addOn.description}</p>
        </div>
        <div className="add-on__price">
        {
          frequencySelected==='monthly'? <p>{`$${addOn.monthly}/mo`}</p> : <p>{`$${addOn.yearly}/yr`}</p>
        }
        </div>
      </div>
        })
      }

    </div>
  )
}

export default Addionals