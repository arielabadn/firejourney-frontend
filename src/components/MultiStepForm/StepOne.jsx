import React, { useState, useEffect } from 'react'

export default (props) => {
  
  const [changed, setChanged] = useState(0)
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  
  function signalParent(isValid) {
    setChanged(isValid)
    props.signalIfValid(isValid)
  }

  useEffect(() => {
    if(changed == 0) {
      signalParent(income.length > 0)
    }
  }, [changed])

  const validateIncome = (val) => {
    setChanged(c => c += 1)
    
    let prevIncome = income
    setIncome(val)

    if(prevIncome.length === 0 && val.length === 1) {
      signalParent(true)
      return
    }
    
    if(prevIncome.length === 1 && val.length == 0) {
      signalParent(false)
      return
    }
  }

  const validateExpenses = (val) => {
    setChanged(c => c += 1)
    setExpenses(val)
  }

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Income $</label>
          <input
            className='u-full-width'
            placeholder='Income'
            type='text'
            onChange={e => validateIncome(e.target.value)}
            value={income}
            autoFocus
            required
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Expenses $</label>
          <input
            className='u-full-width'
            placeholder='Expenses'
            type='text'
            onChange={e => validateExpenses(e.target.value)} 
            value={expenses}
          />
        </div>
      </div>
    </div>)
}