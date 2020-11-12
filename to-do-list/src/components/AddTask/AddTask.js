import TaskForm from './TaskForm'
import '../../scss/AddTask.scss'

import { useState } from 'react'
let AddTask=()=>{

    let [popUp,popUpDisplayer]=useState(<></>)

    return (<div className="container">
        {popUp}
        <div className="form-Container">
        <h1>Add New Task </h1>
        <TaskForm showModal={popUpDisplayer}/>
        </div>
    </div>)
}

export default AddTask;