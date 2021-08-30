import { combineReducers, createStore } from 'redux';
import {userReducer} from './reducers/user.reducer';

export const reducer = combineReducers({
    userReducer,
})

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );