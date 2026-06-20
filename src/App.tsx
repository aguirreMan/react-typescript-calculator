import './App.css'
import { useReducer } from 'react'
import { calculatorReducer, formatNumber } from './reducers/calculatorReducer'



export default function App() {
 const [state, dispatch] = useReducer(calculatorReducer, { currentNumber: '0',
   previousNumber: '',
   operator: null,
   reset: false,
 })


  return (
    <div className="calculator">
      <div className="calculator-display">
        <h1 className="original_state">{formatNumber(state.currentNumber)}</h1>
      </div>
      <div className="calculator-buttons">
        <button onClick={() => dispatch({ type: "HANDLE_OPERATORS", payload: "+"})} className="operator" value="+">+</button>
        <button onClick={() => dispatch({ type: "HANDLE_OPERATORS", payload: "-"})} className="operator" value="-">-</button>
        <button onClick={() => dispatch({ type: "HANDLE_OPERATORS", payload: "*"})} className="operator" value="*">×</button>
        <button onClick={() => dispatch({ type: "HANDLE_OPERATORS", payload: "/"})} className="operator" value="/">÷</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "7"})} className="number" value="7">7</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "8"})} className="number" value="8">8</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "9"})} className="number" value="9">9</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "4"})} className="number" value="4">4</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "5"})} className="number" value="5">5</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "6"})} className="number" value="6">6</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "1"})} className="number" value="1">1</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "2"})} className="number" value="2">2</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "3"})} className="number" value="3">3</button>
        <button onClick={() => dispatch({ type: "HANDLE_DECIMALS"})} className="decimal" value=".">.</button>
        <button onClick={() => dispatch({ type: "APPEND_NUMBER", payload: "0"})} className="number" value="0">0</button>
        <button onClick={() => dispatch({ type: "DELETE_PREV_NUMBER"})} className="delete" id="delete-btn">del</button>
        <button onClick={() => dispatch({ type: "CLEAR_CALCULATOR"})} className="clear" id="clear-btn">C</button>
        <button onClick={() => dispatch({ type: "CALCULATE_RESULT"})} className="equal-sign operator" value="=">=</button>
      </div>
    </div>
  )
}
