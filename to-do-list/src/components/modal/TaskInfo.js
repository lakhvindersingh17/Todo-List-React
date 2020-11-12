let TaskInfo=(props)=>{


    let {name,timeRequired,status,creationTime,}=props.data

    return(

        <div className="informationContainer">
                    <h2>{name}</h2>
                    <span className="info-row">
                        <span className="label">Status</span> : {status}
                    </span>
                    <span className="info-row">
                        <span className="label">Created On:</span> {(new Date(creationTime).toLocaleString())}
                    </span>
                    <span className="info-row">
                        <span className="label">Expected Completion Time:</span> {timeRequired} hr
                    </span>
        </div>
    )
}

export default TaskInfo;