import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { main } from './MainReducer'

export const store = createStore(main, applyMiddleware(thunk))