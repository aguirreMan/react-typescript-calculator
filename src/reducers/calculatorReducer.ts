export interface CalculatorState {
  currentNumber: string
  previousNumber: string
  operator: string | null
  reset: boolean
}

export type CalculatorActions =
  | { type: 'APPEND_NUMBER'; payload: string }
  | { type: 'HANDLE_DECIMALS' }
  | { type: 'HANLDE_OPERATORS'; payload: string }
  | { type: 'CLEAR_CALCULATOR'}
  | { type: 'DELETE_PREV_NUMBER'}
  | { type: 'CALCULATE_RESULT' }


function calculateResult(previousNumber: string, currentNumber: string, operator: string | null): number {
  const parsedPreviousNumber = parseFloat(previousNumber)
  const parsedCurrentNumber = parseFloat(currentNumber)
  if (isNaN(parsedPreviousNumber) || isNaN(parsedCurrentNumber)) return parsedCurrentNumber
  switch (operator) {
    case '+':
      return parsedPreviousNumber + parsedCurrentNumber
    case '-':
      return parsedPreviousNumber - parsedCurrentNumber
    case '*':
      return parsedPreviousNumber * parsedCurrentNumber
    case '/':
      return parsedPreviousNumber / parsedCurrentNumber
    default:
      return parsedCurrentNumber
  }
}

export function calculatorReducer(state: CalculatorState, action: CalculatorActions): CalculatorState {
  switch (action.type) {
    case 'APPEND_NUMBER':
      if (state.reset) {
        return { ...state, currentNumber: action.payload, reset: false };
      }
      return {
        ...state,
        currentNumber: state.currentNumber === '0'
          ? action.payload
          : state.currentNumber + action.payload
      }
    case 'HANDLE_DECIMALS':
      if (state.reset) {
        return { ...state, currentNumber: '0.', reset: false };
      }
      if(state.currentNumber.includes('.')) return state
      return {
        ...state, currentNumber: state.currentNumber + '.', reset: false
      }
    case 'HANLDE_OPERATORS':
      if (state.operator !== null && !state.reset) {
        const chainedOperation = calculateResult(state.previousNumber, state.currentNumber, state.operator)
        return {
          ...state,
          previousNumber: String(chainedOperation),
          currentNumber: String(chainedOperation),
          operator: action.payload,
          reset: true
        }
      }
      return { ...state, operator: action.payload, reset: false }
    case 'CLEAR_CALCULATOR':
      return { ...state, currentNumber: '0', previousNumber: '', operator: null, reset: true };
    case 'DELETE_PREV_NUMBER':
      return { ...state, currentNumber: state.currentNumber.slice(0, -1), reset: false };
    case 'CALCULATE_RESULT':
      return { ...state,  };
    default:
      return state
  }
}
