import { combineReducers } from "redux";
import { countReducer } from "./counter";
import searchReducer from "../slices/search";

const rootReducer = combineReducers( {
    counter: countReducer,
    search: searchReducer
})
export default rootReducer;