import { completionTimeInput, taskNameInput } from "../../store/actions/TaskFormAction";
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '95%',
      
    },
  },
}));


let FormInput=(props)=>{
    const classes = useStyles();
    let taskName=props.taskName;
    let nameUpdator=props.nameUpdator;
    let timeUpdator=props.timeUpdator;
    let expectedTime=props.expectedTime;
    
    return(
        <div className={classes.root} >
            <TextField className="TextField" type="txt" required label="Task Name" placeholder="Task Name" value={taskName} onChange={(e)=>nameUpdator(e.target.value)}/>
            <TextField  type="number" required label="Expected Time " placeholder="Expected Time" value={expectedTime} onChange={(e)=>timeUpdator(e.target.value)} />
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