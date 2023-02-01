import React from 'react'
import '../../../index.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectStep } from '../currentDisplay/currentDisplaySlice'

function Summary() {

  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const addOns = useSelector(state => state.addOns.selectedAddOns);

  const getTotal = () => {
    let addOnsTotal = 0;

    addOns.forEach((addOn) => {
      plan.frequency==='monthly'? addOnsTotal += addOn.monthly: addOnsTotal += addOn.yearly
    })

    return addOnsTotal + plan.type.rate
  }


  return (
    <div className='summary'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary__details">
        <div className="main">
          <div>
            <h3>{plan.type.name} ({plan.frequency})</h3>
            <button onClick={() => {
              dispatch(selectStep(1))
            }}>Change</button>
          </div>
          <div>
            ${plan.type.rate}/{`${plan.frequency==='monthly'? 'mo': 'yr'}`}
          </div>
        </div>
        <div className="add-ons">

        {addOns.map(addOn => {
          return <div>
            <p>{addOn.name}</p>
            <h5>+{plan.frequency==='monthly'? `${addOn.monthly}/mo`: `${addOn.yearly}/yr`}</h5>
          </div>
        })}
        </div>
      </div>
      <div className="summary__total">
        <p>Total (per {plan.frequency==='monthly'? 'month': 'year'})</p>
        <h4>${getTotal()}</h4>
      </div>
    </div>
  )
}

export default Summary