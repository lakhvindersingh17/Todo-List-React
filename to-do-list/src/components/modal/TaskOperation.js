import axios from 'axios';
import { useState } from 'react';
import SuccessModal from './SuccessModal'
import UpdateTask from './UpdateTask';

let TaskOperation = (props) => {

    let {_id,creationTime,timeRequired}=props.data;
    let [status, statusUpdator] = useState(props.data.status)
   
    
    let isComplete=false;
    
    if(status=="Completed")
        isComplete=true;    
    
        let deleteTask = () => {
        axios.delete(`http://localhost:5000/Task/${_id}`)
            .then(res => props.hideModal()).catch((err) => console.log("Error"))

    }
    let updateStatus = (value) => {
        if(!isComplete){
        statusUpdator(value)
        axios.patch(`http://localhost:5000/Task/${_id}/${value}`)
            .then(() =>statusUpdateHandler(value)).catch("Error")

        }    
    }

    let statusUpdateHandler=(value)=>{
       props.dataUpdator()
       if(value=="Completed"){
           let timeTaken=(new Date())-(new Date(creationTime));
           timeTaken= Math.floor(timeTaken/(60*60*1000))
            if(timeTaken<=timeRequired)
                var message="Task Completed Within Time"
            else
                message=`Task Completed in ${(timeTaken-timeRequired)} Extra hours`    
       }
       else
        message="Task Status Updated Succesfully"
       
    props.modalDisplayer(<SuccessModal text={message} 
                hideModal={props.modalDisplayer} position={'absolute'}/>)

        
    }        
    
    

    return (
        <div className="task-operations">
            <div id="update-status">
            <label>Update Status: </label>
            
            <select value={status}
                onChange={(evt) => updateStatus(evt.target.value)}>
                <option value="To-Do">TO-DO</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Completed">Completed</option>
            </select>
            </div>
            <span id="delete-task" onClick={deleteTask}>Delete Task</span>
            
            <UpdateTask dataUpdator={props.dataUpdator} modalDisplayer={props.modalDisplayer} data={props.data}/>
            
        </div>
    )
}

export default TaskOperation;