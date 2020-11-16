import {NameInput,Reset,TimeInput} from '../actionTypes/formActionTypes'
let intialState={
    taskName:"",
    expectedTime:""
}

export let formReducer=(state=intialState,action)=>{
    switch(action.type){
        case NameInput:
            return {...state, taskName:action.payload};
        case TimeInput:
            return {...state, expectedTime:action.payload};
        case Reset:
            return {taskName:"",expectedTime:""};
        default:
            return state;    
    }
}