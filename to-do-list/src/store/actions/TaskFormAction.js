import {NameInput,Reset,TimeInput} from '../actionTypes/formActionTypes'
export let taskNameInput=(value)=>{
    return{
        type:NameInput,
        payload:value
    }
}

export let completionTimeInput=(value)=>{
    return{
        type:TimeInput,
        payload:value
    }
}

export let formReset=()=>{
    return{
        type:Reset
    }
}
