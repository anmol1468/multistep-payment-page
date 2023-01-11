import React from 'react'


function Info() {
  return (
    <div className='info'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number.</p>
      <form action="">
        <h4>Name</h4>
        <input type="text" placeholder='e.g. Stephen King' />
        <h4>Email Address</h4>
        <input type="text" placeholder='e.g. stephenking@something.com' />
        <h4>Phone Number</h4>
        <input type="text" placeholder='e.g. +1 234 567 8910' />
      </form>
    </div>
  )
}

export default Info