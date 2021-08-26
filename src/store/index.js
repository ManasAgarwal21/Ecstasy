import { createStore } from 'react-redux';
import {rootReducer} from './../reducers/rootReducer';

export const Store = createStore(rootReducer);