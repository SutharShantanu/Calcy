// actionTypes.js

// Number actions
export const ADD_DIGIT = "ADD_DIGIT"; // Add a digit to the display
export const ADD_DECIMAL = "ADD_DECIMAL"; // Add a decimal point to the current number

// Operation actions
export const SET_OPERATOR = "SET_OPERATOR"; // Set the operator (+, -, *, /)
export const PERFORM_CALCULATION = "PERFORM_CALCULATION"; // Perform the calculation and update the result

// Clear actions
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"; // Clear the display
export const CLEAR_ALL = "CLEAR_ALL"; // Clear all data (reset the calculator)

// Additional actions (if needed)
export const BACKSPACE = "BACKSPACE"; // Remove the last digit/character from the display
export const TOGGLE_NEGATIVE = "TOGGLE_NEGATIVE"; // Toggle the sign of the displayed number
