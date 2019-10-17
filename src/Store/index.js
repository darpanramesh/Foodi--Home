import { createStore, applyMiddleware } from 'redux'
import AllReducers from './Reducers'
import thunk from 'redux-thunk'


export default createStore(AllReducers, applyMiddleware(thunk))