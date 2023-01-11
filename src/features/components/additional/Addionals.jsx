import React from 'react'
import '../../../index.scss'
import tick from '../../../assets/images/icon-checkmark.svg'

function Addionals() {
  return (
    <div className='addionals'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience</p>

      <div className="add-on">
        <div className="add-on__tick selected">
          <img src={tick} alt="nothing important" />
        </div>
        <div className="add-on__info">
          <h4>Online service</h4>
          <p>Access to multiplayer games</p>
        </div>
        <div className="add-on__price">+$1/mo</div>
      </div>
    </div>
  )
}

export default Addionals