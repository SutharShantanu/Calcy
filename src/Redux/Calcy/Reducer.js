
import {
    faPlus,
    faMinus,
    faXmark,
    faDivide,
    faPercent,
} from "@fortawesome/free-solid-svg-icons";
import * as actionTypes from "./ActionType";

const initialState = {
    displayValue: "0",
    operator: null,
    prevValue: null,
    result: null,
    history: [],
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_DIGIT:
            return {
                ...state,
                displayValue:
                    state.displayValue === "0"
                        ? action.payload
                        : state.displayValue + action.payload,
            };

        case actionTypes.ADD_DECIMAL:
            if (!state.displayValue.includes(".")) {
                return {
                    ...state,
                    displayValue: state.displayValue + ".",
                };
            }
            return state;

        case actionTypes.SET_OPERATOR:
            if (state.prevValue && state.operator && state.displayValue) {
                const expression =
                    state.prevValue +
                    " " +
                    state.operator +
                    " " +
                    state.displayValue;
                return {
                    ...state,
                    operator: action.payload,
                    prevValue: expression,
                    displayValue: "0",
                };
            } else {
                return {
                    ...state,
                    operator: action.payload,
                    prevValue: state.displayValue,
                    displayValue: "0",
                };
            }

        case actionTypes.PERFORM_CALCULATION:
            if (state.prevValue && state.operator && state.displayValue) {
                const expression =
                    state.prevValue +
                    " " +
                    state.operator +
                    " " +
                    state.displayValue;
                const result = new Function("return " + expression)();
                const operatorIcon = getOperatorIcon(state.operator);

                return {
                    ...state,
                    displayValue: String(result),
                    operator: null,
                    prevValue: null,
                    result,
                    history: [
                        ...state.history,
                        { expression, operatorIcon, result },
                    ],
                };
            }

            return state;

        case actionTypes.CLEAR_DISPLAY:
            return {
                ...state,
                displayValue: action.payload,
            };

        case actionTypes.CLEAR_ALL:
            return {
                ...initialState,
                history: [],
            };

        default:
            return state;
    }
};

const getOperatorIcon = (operator) => {
    switch (operator) {
        case "+":
            return faPlus;
        case "-":
            return faMinus;
        case "*": 
            return faXmark;
        case "/":
            return faDivide;
        case "%":
            return faPercent;
        default:
            return null;
    }
};


export default calculatorReducer;
