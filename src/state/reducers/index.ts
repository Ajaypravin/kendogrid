
import {combineReducers} from 'redux'
import StateReducer from '../reducers/statesReducer' 

const reducers = combineReducers({
    states : StateReducer
})


export default reducers
export type RootState = ReturnType<typeof reducers>