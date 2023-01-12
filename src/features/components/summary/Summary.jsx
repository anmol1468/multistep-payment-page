import React from 'react'
import '../../../index.scss'

function Summary() {
  return (
    <div className='summary'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary__details">
        <div className="main">
          <div>
            <h3>Arcade (Monthly)</h3>
            <button>change</button>
          </div>
          <div>
            $9/mo
          </div>
        </div>
        <div className="add-ons">
          <div>
            <p>Online service</p>
            <h5>+1/mo</h5>
          </div>
          <div>
            <p>Larger storage</p>
            <h5>+2/mo</h5>
          </div>
        </div>
      </div>
      <div className="summary__total">
        <p>Total (per month)</p>
        <h4>$12/mo</h4>
      </div>
    </div>
  )
}

export default Summary