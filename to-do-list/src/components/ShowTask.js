import { useState,useRef } from 'react';
import '../scss/ShowTask.scss'
import PiorityToolTip from './PiorityTask/PiorityToolTip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

let ShowTask=(props)=>{
    
    let {name,status,timeRequired,creationTime,_id}=props.data;
    
    let [piorityToolTip,showUpdator]=useState(<> </>) 
    
    let timeTaken= (new Date())- (  new Date(creationTime) )
    timeTaken=Math.floor(timeTaken/(60*60*1000))
    
    let piority=false;

    if((status!=="Completed")&&(timeRequired/2<timeTaken)){
                piority=true;
                var border="red";    
    }
    // else if(status=="Completed")
    //         border="green";

    
    if(status!=="Completed"){
        var timeLeft=timeRequired-timeTaken
        if(timeLeft>=0)
            var timeLable=<label className="label" > Time Left: {timeLeft} hour</label>
        else
            timeLable=<label className="label" style={{color:"brown"}}>Exceeded Expected Time</label>    
    }

    let showPiority=()=>{
        if(piority){
            setTimeout(()=>showUpdator(<PiorityToolTip />),400)
        console.log("In Piority")
        
        }
    }

    let hidePiority=()=>{
        if(piority){
            setTimeout(()=>showUpdator(<></>),400)
        }
    }

    
    return(
        <OverlayTrigger
    placement="left"
    overlay={
    <Tooltip className="tooltip"><div id="arrow"></div>Check out this avatar</Tooltip>}
        >
        <div className="TaskContainer" onMouseEnter={()=>showPiority()} onMouseLeave={()=>hidePiority()} onClick={props.onClick} style={{borderColor:border}}>
    
        <h2>{name}</h2>
        <div className="Information">
        <span> <span className="label">Status :</span>{status} </span>
        <span> <span className="label">Expected Completion Time :</span> {timeRequired}hr</span>
        </div>
        
        {piorityToolTip}
        {timeLable}
    <progress max={timeRequired} value={timeTaken}  style={{width:"100%"}}></progress>
    </div>
    </OverlayTrigger>

    )
}

export default ShowTask;