import TaskOperation from './TaskOperation'
import '../../scss/Modal.scss'
import { useEffect, useState } from 'react'

import TaskInfo from './TaskInfo'
const axios =require('axios').default 

let Modal=(props)=>{
    let [data,dataUpdate]=useState(props.data)
    
    let [successModal,displayer]=useState(<></>)
    let {timeRequired,_id}=data

    let updateData=()=>{
        axios.get(`http://localhost:5000/Task/${_id}`)
        .then(res=>res.data).then(data=>dataUpdate(data)).catch(()=>console.log("Error"))
        // console.log("updateData")
    }

    // useEffect(()=>{

    //     axios.get(`http://localhost:5000/Task/${_id}`)
    //     .then(res=>res.data).then(data=>dataUpdate(data)).catch(()=>console.log("Error"))
    // },[successModal])    
    // console.log(data)
    

    return(
        <div className="modal">
            {successModal}
            <section className="modal-container">
            <span id="closeBtn" onClick={()=>props.hideModal()}>X</span>
            <div className="modal-content">
                
                <TaskInfo data={data}/>
                <TaskOperation id={_id} modalDisplayer={displayer} hideModal={props.hideModal} data={data} timeRequired={timeRequired} dataUpdator={updateData}/>
                
            </div>
            </section>
        </div>
    )

}

export default Modal;