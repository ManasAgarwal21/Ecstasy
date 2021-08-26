import { combineReducers } from "redux";
import {updateUser, getData} from './';

export const rootReducer = () => {
    return combineReducers({
        updateUser,
        getData
    })
}