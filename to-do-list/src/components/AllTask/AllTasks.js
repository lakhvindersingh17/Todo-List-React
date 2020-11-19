
import axios from 'axios'
import React from 'react';
import ShowTask from '../ShowTask'
import '../../scss/AllTask.scss'
import Modal from '../modal/Modal'


class AllTasks extends React.Component{

    constructor(){
        super();

        this.state={data:undefined,
                    modal:<></>}
        this.showModal=this.showModal.bind(this);   
        this.hideModal=this.hideModal.bind(this);                  
    }

    getData=()=>{
        fetch('http://localhost:5000/Task',{method:"GET"}).then(res=>res.json())
        .then(data=>{
            this.setState({data:data})
            window.localStorage.setItem("allTask",JSON.stringify(data))
        }).
        catch(err=>{
            let localData=JSON.parse(window.localStorage.getItem("allTask"))
            this.setState({data:localData})
        })
    }

    componentDidMount=()=>{

        this.getData()
    }

    hideModal(){
        this.setState({modal:<></>});
        this.getData()
    }
    showModal(data){

        console.log("clicked")
        this.setState({ modal:<Modal  data={data} hideModal={this.hideModal} />})
    }

    render=()=>{
        
        if(this.state.data===undefined)return (<div className="Container">
            <h1>No Tasks Present Right Now</h1>
            </div>
        )
        else return(
            <div className="Container" >
            <h1 >All Tasks Record</h1>
            <div>{this.state.modal}</div>
            {this.state.data.map(value=><ShowTask onClick={()=>this.showModal(value)} 
                                key={value._id}  data={value}/> ) }
                                
            </div>
        )
    }
}
        
        


export default AllTasks;