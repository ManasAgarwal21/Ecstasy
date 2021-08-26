import { combineReducers } from "redux";
import {updateName, getData} from './';

export const rootReducer = () => {
    return combineReducers({
        updateName,
        getData
    })
}