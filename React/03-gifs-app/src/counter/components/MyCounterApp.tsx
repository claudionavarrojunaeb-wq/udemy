import { useCounter } from '../hooks/useCounter'
import './MyCounterApp.css'

export const MyCounterApp = () => {
  const {counter,handleAdd,handleReset,handleSubtract} = useCounter({initialValue: 10});
  return (
    <div className="counter-app">
        <h1>Counter: {counter}</h1>
        {/* <h1>Counter: {counter2}</h1> */}
        <div className="counter-app__actions">
            <button onClick={handleAdd}>+1</button>
            {/* <button onClick={handleAdd2}>+1</button> */}
            <button onClick={handleSubtract}>-1</button>
            {/* <button onClick={handleSubtract2}>-1</button> */}
            <button onClick={handleReset}>Reset</button>
            {/* <button onClick={handleReset2}>Reset</button> */}
        </div>
    </div>
  )
}

