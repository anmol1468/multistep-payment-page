import React from 'react'
import Arcade from '../../../assets/images/icon-arcade.svg'
import Advanced from '../../../assets/images/icon-advanced.svg'
import Pro from '../../../assets/images/icon-pro.svg'
import '../../../index.scss'

function Plan() {
  return (
    <div className='plan'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number.</p>
      <form action="">
        <div className="plan__type">
          <div>
            <img src={Arcade} alt="arcade-logo" />
            <h3>Arcade</h3>
            <p>$9/mo</p>
          </div>
          <div>
            <img src={Advanced} alt="advanced-logo" />
            <h3>Advanced</h3>
            <p>$12/mo</p>
          </div>
          <div>
            <img src={Pro} alt="pro-logo" />
            <h3>Pro</h3>
            <p>$15/mo</p>
          </div>
        </div>
        <div className="plan__frequency">
          <p>Monthly</p>
          <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
          <p>Yearly</p>
        </div>
      </form>
    </div>
  )
}

export default Plan