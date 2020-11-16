import FormInput from './FormInput'
import {useState} from 'react';
import SuccessModal from '../modal/SuccessModal'
import { Reset } from '../../store/actionTypes/formActionTypes';
import { connect } from 'react-redux';
import { formReset } from '../../store/actions/TaskFormAction';
const axios= require('axios').default


let TaskForm=(props)=>{
    
    // let [taskName,nameUpdator]=useState('')
    // let [expectedTime,timeUpdator]=useState(undefined);
    let successHandler=()=>{
        // nameUpdator('');
        props.reset();
        props.showModal(<SuccessModal text={'Task Succesfully Added'} hideModal={props.showModal}/>)
        
    }

    let clickHandler=()=>{
        if(props.taskName!==''){
            let body={name:props.taskName,timeRequired:props.expectedTime,creationTime:(new Date())}
            axios.post('http://localhost:5000/Task',body)
            .then(()=>successHandler())
            .catch((err)=>console.log(err))
        }
    }
    console.log(props.taskName,props.expectedTime)
    return(
        <div>
            {/* <FormInput name={taskName} time={expectedTime} nameUpdator={nameUpdator} timeUpdator={timeUpdator}/> */}
            <FormInput/>
            <div className="btn">
            <button onClick={clickHandler}>Add Task</button>
            </div>
        </div>
    )

}
let mapStateToProps=state=>{

    return {
        taskName:state.taskName,
        expectedTime:state.expectedTime
    }
}

let mapDispatchToProps=dispatch=>{

    return {
        reset:()=>dispatch(formReset())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);