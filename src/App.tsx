import './App.css'
import { useState } from 'react'
import type { CalculatorState } from './reducers/calculatorReducer'


export default function App() {
  const [state, dispatch] = useState<CalculatorState>({
    currentNumber: '0',
    previousNumber: '',
    operator: null,
    reset: false,
  })

  return (
    <div className="calculator">
      <div className="calculator-display">
        <h1 className="original_state">{state.currentNumber}</h1>
      </div>
      <div className="calculator-buttons">
        <button className="operator" value="+">+</button>
        <button className="operator" value="-">-</button>
        <button className="operator" value="*">×</button>
        <button className="operator" value="/">÷</button>
        <button className="number" value="7">7</button>
        <button className="number" value="8">8</button>
        <button className="number" value="9">9</button>
        <button className="number" value="4">4</button>
        <button className="number" value="5">5</button>
        <button className="number" value="6">6</button>
        <button className="number" value="1">1</button>
        <button className="number" value="2">2</button>
        <button className="number" value="3">3</button>
        <button className="decimal" value=".">.</button>
        <button className="number" value="0">0</button>
        <button className="delete" id="delete-btn">del</button>
        <button className="clear" id="clear-btn">C</button>
        <button className="equal-sign operator" value="=">=</button>
      </div>
    </div>
  )
}
