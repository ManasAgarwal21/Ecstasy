import { createStore } from 'redux';
import {rootReducer} from './../reducers/rootReducer';

export const Store = createStore(rootReducer);