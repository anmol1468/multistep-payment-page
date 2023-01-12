import React from 'react'

function Steps() {
  return (
    <div className='steps'>
      <div className="step">
        <div className="step__number">1</div>
        <div className="step__name">
          <p>STEP 1</p>
          <h4>YOUR INFO</h4>
        </div>
      </div>
      <div className="step">
        <div className="step__number">2</div>
        <div className="step__name">
          <p>STEP 2</p>
          <h4>SELECT PLAN</h4>
        </div>
      </div>
      <div className="step">
        <div className="step__number">3</div>
        <div className="step__name">
          <p>STEP 3</p>
          <h4>ADD-ONS</h4>
        </div>
      </div>
      <div className="step">
        <div className="step__number">4</div>
        <div className="step__name">
          <p>STEP 4</p>
          <h4>SUMMARY</h4>
        </div>
      </div>
    </div>
  )
}

export default Steps