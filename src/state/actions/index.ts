import {ActionType} from '../actionTypes'
import {StateModel} from '../../models/StateModel'


interface StateLoadingAction{
    type:ActionType.STATES_LOADING
}

interface StateSuccessAction{
    type:ActionType.STATES_SUCCESS
    payload:StateModel[]
}

interface StateErrorAction {
    type:ActionType.STATES_ERROR
    payload:string
}

interface StateUpdateAction{
    type:ActionType.STATES_UPDATE
    payload:StateModel[]
}

export type Action =StateLoadingAction |StateSuccessAction |StateErrorAction | StateUpdateAction