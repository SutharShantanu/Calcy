// actions.js

import * as actionTypes from "./ActionType";

// Action creators for number actions
export const addDigit = (digit) => {
    return {
        type: actionTypes.ADD_DIGIT,
        payload: digit,
    };
};

export const addDecimal = () => {
    return {
        type: actionTypes.ADD_DECIMAL,
    };
};

// Action creators for operation actions
export const setOperator = (operator) => {
    return (dispatch, getState) => {
        const { calculatorReducer } = getState();
        const lastChar = calculatorReducer.displayValue.slice(-1);
        if (!isNaN(lastChar) || lastChar === ".") {
            // Check if the last character is a number or decimal point before setting the operator
            dispatch({ type: actionTypes.SET_OPERATOR, payload: operator });
        }
    };
};

// Action creators for clear actions
export const clearDisplay = () => {
    return (dispatch, getState) => {
        const { calculatorReducer } = getState();
        // Remove the last character from the display value (backspace functionality)
        const updatedDisplay = calculatorReducer.displayValue.slice(0, -1);
        dispatch({ type: actionTypes.CLEAR_DISPLAY, payload: updatedDisplay });
    };
};

export const performCalculation = () => {
    return {
        type: actionTypes.PERFORM_CALCULATION,
    };
};

export const clearAll = () => {
    return {
        type: actionTypes.CLEAR_ALL,
    };
};

// Additional action creators (if needed)
export const backspace = () => {
    return {
        type: actionTypes.BACKSPACE,
    };
};

export const toggleNegative = () => {
    return {
        type: actionTypes.TOGGLE_NEGATIVE,
    };
};
