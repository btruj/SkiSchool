import { combineReducers } from "redux"
import { instructorReducer } from "./ReduxReducer"

export const rootReducer = combineReducers ({
    addel: instructorReducer,
});