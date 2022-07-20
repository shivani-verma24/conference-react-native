//Combine Reducers: if have more than one reducer

import { combineReducers } from "redux";
import { Counter } from "./CounterReducer";
import { Products } from "./Products";

export default combineReducers({
    Counter,
    Products
})