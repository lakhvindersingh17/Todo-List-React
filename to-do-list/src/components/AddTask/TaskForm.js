import FormInput from './FormInput'
import {useState} from 'react';
import SuccessModal from '../modal/SuccessModal'
const axios= require('axios').default


let TaskForm=(props)=>{
    
    let [taskName,nameUpdator]=useState('')
    let [expectedTime,timeUpdator]=useState();
    let successHandler=()=>{
        nameUpdator('');
        props.showModal(<SuccessModal text={'Task Succesfully Added'} hideModal={props.showModal}/>)
        
    }

    let clickHandler=()=>{
        if(taskName!==''){
            let body={name:taskName,timeRequired:expectedTime,creationTime:(new Date())}
            axios.post('http://localhost:5000/Task',body)
            .then(()=>successHandler())
            .catch(()=>console.log("Error"))
        }
    }
    return(
        <div>
            <FormInput name={taskName} time={expectedTime} nameUpdator={nameUpdator} timeUpdator={timeUpdator}/>
            <div className="btn">
            <button onClick={clickHandler}>Add Task</button>
            </div>
        </div>
    )

}

export default TaskForm;