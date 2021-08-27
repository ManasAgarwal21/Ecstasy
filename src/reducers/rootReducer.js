import { combineReducers } from "redux";
import {updateUser, getData} from './';

export default combineReducers({
    updateUser,
    getData
})