

let FormInput=(props)=>{

    let taskName=props.name;
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

export default FormInput;