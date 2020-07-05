import React from "react";
import OperationForm from "./OperationForm"
import Operations from "./Operations";

export default class Task extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            buttonText: "Start timer",
            clicked: 0,
            isClicked: false
        }
    }

    addOperationForm = (e) => {
        e.preventDefault()
        this.setState({
            isClicked: this.state.isClicked === false ? true : false 
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.onFinish(this.props.task.id)
    }

    // showTime = () => {
    //     const {task} = this.props
    //     let hours = Math.floor( task.timeSpent / 3600);
    //     task.timeSpent %= 3600;
    //     let minutes = Math.floor(task.timeSpent / 60);
    //     let seconds = task.timeSpent % 60;

    //     minutes = String(minutes).padStart(2, "0");
    //     hours = String(hours).padStart(2, "0");
    //     seconds = String(seconds).padStart(2, "0");
    //     return hours + ":" + minutes + ":" + seconds
    // }

    render() {
        return(
            <li className={this.props.task.status==="closed" ? "task-description list-group-item-success" : "list-group-item active task-description"}style={{margin: "30px", listStyle:"none"}}>
                <h2>{this.props.task.name}</h2>
                <p>{this.props.task.description}</p>
                <a href="Finish task" style={{marginTop:"-60px"}} onClick={this.handleClick}>Finish</a>
                <a href="Add operation"  style={{marginTop:"-20px"}} onClick = {this.addOperationForm}>Add Operation</a>
                {this.state.isClicked && <OperationForm addOperation={this.props.add} id={this.props.task.id}/>}
                <Operations operations = {this.props.task.operations} start={this.props.start} stop={this.props.stop} id={this.props.task.id}/>
            </li>
        )
    }
}