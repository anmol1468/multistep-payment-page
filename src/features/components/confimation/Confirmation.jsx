import React from 'react'
import tick from '../../../assets/images/icon-thank-you.svg'

function Confirmation() {
  return (
    <div className='confirmation'>
      <img src={tick} alt="thank you logo" />
      <h3>Thank you!</h3>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Confirmation