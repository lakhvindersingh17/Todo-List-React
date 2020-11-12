import '../../scss/Navbar.scss'
import {Link} from 'react-router-dom'

let Navbar=()=>{

    return(
        <div className="Navbar">
        <span><Link to="/addTask" className="NavbarLink">Add Task</Link></span>
        <span><Link to="/" className="NavbarLink">All Tasks</Link></span>
        <span><Link to="/completedTask" className="NavbarLink">Completed Tasks</Link></span>
        <span><Link to="/priorityTask" className="NavbarLink">Priority Task</Link></span>
        </div>
    )
}

export  default Navbar;