import Navbar from './Navbar'
import '../../scss/Header.scss'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

let Header=()=>{


    return(
        <div className="Header">
            <h1 id="heading">TODO List APP</h1>
            <Navbar/>
        </div>
    )

}

export default Header;