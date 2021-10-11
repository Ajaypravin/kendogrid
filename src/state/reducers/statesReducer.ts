import {ActionType} from '../actionTypes'
import {Action} from '../actions'
import {StateModel} from '../../models/StateModel'


interface IStateReducer{
    loading:boolean,
    error:string | null,
    data:StateModel[]
}

const INITIAL_STATE:IStateReducer ={
    loading:false,
    error:null,
    data:[]
}

const StateReducer =(state:IStateReducer=INITIAL_STATE, action:Action):IStateReducer=>{
    switch(action.type){
        case ActionType.STATES_LOADING:
            return {loading:true, error:null, data:[]};
        case ActionType.STATES_SUCCESS:
            return {loading:false, error:null, data:action.payload};
        case ActionType.STATES_ERROR:
            return {loading:false, error:action.payload, data:[]}
        case ActionType.STATES_UPDATE:
            return {loading:false, error:null, data:action.payload};
        default:
            return state;
    }
};

export default StateReducer