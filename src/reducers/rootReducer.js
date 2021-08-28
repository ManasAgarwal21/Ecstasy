import { combineReducers } from "redux";
import {updateReducer, getData} from './';

export default combineReducers({
    updateReducer,
    getData
})