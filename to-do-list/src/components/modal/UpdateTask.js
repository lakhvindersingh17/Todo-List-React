import SuccessModal from './SuccessModal'
const { Fragment ,useState} = require("react")
const axios =require('axios').default;

let UpdateTask=(props)=>{

    let {timeRequired,_id}=props.data
    let [updatedName,nameUpdator]=useState(props.data.name)
    let [updatedTime,timeUpdator]=useState(timeRequired)
    
    let [toggle,toggleForm]=useState(true);
    let clickHandler=()=>{
        toggleForm(false);
    }

    let updateHandler=()=>{
        props.dataUpdator();
        toggleForm(true);
        props.modalDisplayer(<SuccessModal text={"Task Details Updated Succesfully"} 
                                hideModal={props.modalDisplayer} position={'absolute'}/>)
    }

    let sumbitHandler=(e)=>{
        e.preventDefault();
        if(props.timeRequired!=8 && updatedName!=""){
            axios.patch(`http://localhost:5000/Task/${_id}?name=${updatedName}&timeRequired=${updatedTime}`)
            .then(()=>updateHandler()).catch("Error")
        }

        else if (props.timeRequired==8 && updatedName!=""){
            axios.patch(`http://localhost:5000/Task/${_id}?name=${updatedName}`)
            .then(()=>updateHandler()).catch("Error")
        }

    }
    return(
        <div id="task-update">
            {toggle?
            <button id="edit-btn" onClick={()=>clickHandler()}>Edit Task Details</button>:
            
            <form className="updateForm" onSubmit={sumbitHandler}>
                <h3> Update Details</h3>
                <label>Task Name:</label>
                <input type="text" value={updatedName} onChange={(e)=>nameUpdator(e.target.value)}/>
                
                {timeRequired!=8?<Fragment>
                <label>Time Required:</label>
                <input type="number" value={updatedTime} onChange={(e)=>timeUpdator(e.target.value)}/>
                </Fragment>:
                <></>}
                <input id="submit-btn" type="submit"/>
            </form>
            }
        </div>
    )
}

export default UpdateTask;