import { useState } from 'react'
interface Props {
  initialValue?: number;
}
export const useCounter= ({initialValue = 10}: Props) => {
  const [counter, setCounter] = useState(initialValue);
  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleSubtract = () => {
    setCounter((prevState)  => prevState-1)
  }
  const handleReset = () => {
    setCounter(initialValue)
  }
  return {
  //Props
  counter: counter,

  //Methos or actions
  handleAdd,
  handleSubtract,
  handleReset,
  }
}
