import AuthReducer from './auth-reducer'
import MainReducer from './main-reducer'

import {combineReducers} from 'redux'

const allReducers = combineReducers({
    MainReducer,
    AuthReducer
})


export default allReducers