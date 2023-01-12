import React from 'react'
import CurrentDisplay from '../../components/currentDisplay/CurrentDisplay'
import Steps from '../../components/steps/Steps'

function Payment() {
  return (
    <div className='payment'>
      <Steps />
      <CurrentDisplay />
    </div>
  )
}

export default Payment