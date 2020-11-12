import {Route,Switch} from 'react-router-dom'
import AddTask from '../AddTask/AddTask'
import CompletedTask from '../CompletedTask/CompletedTask'
import AllTasks from '../AllTask/AllTasks'
import PiorityTask from '../PiorityTask/PiorityTask'

let NavbarRoutes=()=>{

    return(
        <Switch>
                <Route path="/addTask"><AddTask/></Route>
                <Route path="/completedTask"><CompletedTask/></Route>
                <Route path="/priorityTask"><PiorityTask/></Route>
                <Route path="/"><AllTasks/></Route>   
            </Switch>
    )
}

export default NavbarRoutes