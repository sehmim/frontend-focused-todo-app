
import { combineReducers } from 'redux'
import { visibilityFilter } from "./visibilityFilter";
import { showItem } from "./todos";


export const rootReducer = combineReducers({
    visibilityFilter,
    showItem
})