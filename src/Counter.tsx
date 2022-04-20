import React from 'react'
import './app.css'
// import counter from './store/counter'
import {observer} from 'mobx-react-lite'
import {OnCounter} from './store/counter'



const Counter = () => {
  const {total, count, increment,decrement} = OnCounter

  return (
    <div>

      <div className='form'>
          <div>{total}</div>
          <br/>
        {count}
        <button className='btn' onClick={increment}>+</button>
        <br/>
        <button className='btn' onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default observer(Counter)
