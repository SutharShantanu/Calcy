// Homepage.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Key from "../Components/Key";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark,
    faEquals,
    faDivide,
    faBackspace,
    faPlus,
    faMinus,
    faPercent,
} from "@fortawesome/free-solid-svg-icons";
import {
    addDigit,
    addDecimal,
    setOperator,
    performCalculation,
    clearDisplay,
    clearAll,
    toggleNegative,
} from "../Redux/Calcy/Action.js";
import "./Homepage.css";

const Homepage = () => {
    const displayValue = useSelector(
        (state) => state.calculatorReducer.displayValue
    );
    const operator = useSelector((state) => state.calculatorReducer.operator);
    const history = useSelector((state) => state.calculatorReducer.history);
    const dispatch = useDispatch();

    const handleKeyPress = (key) => {
        switch (key) {
            case "AC":
                dispatch(clearAll());
                break;
            case "C":
                dispatch(clearDisplay());
                break;
            case "%":
            case "/":
            case "*":
            case "+":
            case "-":
                dispatch(setOperator(key));
                break;
            case "=":
                dispatch(performCalculation());
                break;
            case ".":
                dispatch(addDecimal());
                break;
            case "DEL":
                dispatch(clearDisplay());
                break;
            default:
                dispatch(addDigit(key));
                break;
        }
    };

    // Calculate the real-time expression to display in the input field
    let realTimeExpression = displayValue;
    if (operator) {
        realTimeExpression =
            displayValue === "0"
                ? ""
                : displayValue + " " + getOperatorSymbol(operator);
    }

    // Calculate the full expression to display in history
    const fullExpression = history.reduce(
        (expression, step) =>
            expression +
            " " +
            (step.operatorIcon
                ? getOperatorSymbol(step.operatorIcon)
                : step.expression),
        ""
    );

    return (
        <div className="border-2 border-red-600 rounded-2xl p-3 h-90 my-10 mx-auto box-border w-4/5">
            <h1 className="font-mono text-5xl font-bold text-center my-3">
                Calculator
            </h1>
            <div className="border-2 border-blue-600 p-2 h-max flex justify-between">
                <div className="w-2/3 p-3 mr-4 outline-none text-5xl bg-slate-100 rounded-2xl overflow-auto">
                    <div className="h-2/4 border-2 border-blue-950 p-3 outline-none text-5xl bg-slate-100 rounded-2xl overflow-auto">
                        {history.map((step, index) => (
                            <div
                                key={index}
                                className="text-slate-400 text-2xl">
                                <span>
                                    {step.operatorIcon ? (
                                        <FontAwesomeIcon
                                            icon={step.operatorIcon}
                                        />
                                    ) : (
                                        step.expression
                                    )}
                                </span>
                            </div>
                        ))}
                        <div className="text-slate-400 text-2xl">
                            
                            {fullExpression}
                        </div>
                    </div>
                    <input
                        type="text"
                        className="h-2/4 w-full border-2 border-red-400 p-3 outline-none text-5xl bg-slate-100 rounded-2xl"
                        autoFocus
                        dir="rtl"
                        value={displayValue}
                        onChange={(e) => e.preventDefault()}
                    />
                </div>
                <div className="w-1/3 p-2 grid grid-cols-4 bg-slate-100 rounded-3xl">
                    <Key key_name="AC" onClick={() => handleKeyPress("AC")} />
                    <Key key_name="C" onClick={() => handleKeyPress("C")} />
                    <Key onClick={() => handleKeyPress("%")}>
                        <FontAwesomeIcon icon={faPercent} />
                    </Key>
                    <Key onClick={() => handleKeyPress("/")}>
                        <FontAwesomeIcon icon={faDivide} />
                    </Key>
                    <Key key_name="7" onClick={() => handleKeyPress("7")} />
                    <Key key_name="8" onClick={() => handleKeyPress("8")} />
                    <Key key_name="9" onClick={() => handleKeyPress("9")} />
                    <Key onClick={() => handleKeyPress("*")}>
                        <FontAwesomeIcon icon={faXmark} />
                    </Key>
                    <Key key_name="4" onClick={() => handleKeyPress("4")} />
                    <Key key_name="5" onClick={() => handleKeyPress("5")} />
                    <Key key_name="6" onClick={() => handleKeyPress("6")} />
                    <Key onClick={() => handleKeyPress("-")}>
                        <FontAwesomeIcon icon={faMinus} />
                    </Key>
                    <Key key_name="1" onClick={() => handleKeyPress("1")} />
                    <Key key_name="2" onClick={() => handleKeyPress("2")} />
                    <Key key_name="3" onClick={() => handleKeyPress("3")} />
                    <Key onClick={() => handleKeyPress("+")}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Key>
                    <Key key_name="." onClick={() => handleKeyPress(".")} />
                    <Key key_name="0" onClick={() => handleKeyPress("0")} />
                    <Key onClick={() => handleKeyPress("DEL")}>
                        <FontAwesomeIcon icon={faBackspace} />
                    </Key>
                    <Key onClick={() => handleKeyPress("=")}>
                        <FontAwesomeIcon icon={faEquals} />
                    </Key>
                </div>
            </div>
        </div>
    );
};

export default Homepage;

const getOperatorSymbol = (operator) => {
    switch (operator) {
        case faPlus:
            return "+";
        case faMinus:
            return "-";
        case faXmark:
            return "*";
        case faDivide:
            return "/";
        case faPercent:
            return "%";
        default:
            return "";
    }
};