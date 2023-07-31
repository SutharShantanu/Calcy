import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import calculatorReducer from "./Calcy/Reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    calculatorReducer,
});

const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default Store;
