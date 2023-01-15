import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail, changeNum } from './infoSlice';


function Info() {

  const dispatch = useDispatch();

  const info = useSelector(state => state.info)

  return (
    <div className='info'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address and phone number.</p>
      <form action="">
        <h4>Name</h4>
        <input type="text" placeholder='e.g. Stephen King' value={info.name} 
        onChange={(e) => dispatch(changeName(e.target.value))} />


        <h4>Email Address</h4>
        <input type="email" placeholder='e.g. stephenking@something.com' value={info.email}
        onChange={(e) => dispatch(changeEmail(e.target.value))}
        />


        <h4>Phone Number</h4>
        <input type="number" placeholder='e.g. +1 234 567 8910' value={info.phoneNum}
        onChange={(e) => dispatch(changeNum(e.target.value))}
        />
      </form>
    </div>
  )
}

export default Info