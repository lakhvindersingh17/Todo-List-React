import { completionTimeInput, taskNameInput } from "../../store/actions/TaskFormAction";
import { connect } from 'react-redux';

let FormInput=(props)=>{

    let taskName=props.taskName;
    let nameUpdator=props.nameUpdator;
    let timeUpdator=props.timeUpdator;
    let expectedTime=props.expectedTime;

    return(
        <div className="taskInput">
            <label>Task Name:</label>
            <input type="txt" placeholder="Task Name" value={taskName} onChange={(e)=>nameUpdator(e.target.value)} />
            <label>Expected Time:</label>
            <input type="number" placeholder="Expected Time" value={expectedTime} onChange={(e)=>timeUpdator(e.target.value)} />
        </div>
    )

}

let mapStateToProps=state=>{

    return{
        taskName:state.taskName,
        expectedTime:state.expectedTime
    }
}

let mapDispatchToProps=dispatch=>{

    return{
        nameUpdator:(value)=>dispatch(taskNameInput(value)),
        timeUpdator:(value)=>dispatch(completionTimeInput(value))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FormInput);