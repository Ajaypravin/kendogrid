import {Dispatch} from 'redux'
import {StateService} from '../../services'
import { ActionType } from '../actionTypes'
import { Action } from '../actions'

export const fetchStates=()=>{
    return async (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.STATES_LOADING
        })

        try{
            const states = await StateService.getStates()
            dispatch({
                type:ActionType.STATES_SUCCESS,
                payload:Object.values(states)
            })

        }catch{
            dispatch({
                type:ActionType.STATES_ERROR,
                payload:"Something went wrong!"
            })
        }
    }
}

export const updateStates=(states:any)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.STATES_UPDATE,
            payload:states
        })
    }
}
