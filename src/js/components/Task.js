import React from "react";
import OperationForm from "./OperationForm"
import Operations from "./Operations";

export default class Task extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            buttonText: "Start timer",
            clicked: 0,
            isClicked: false,
            disabled: false,
            btnText: "Add operation"
        }
    }

    addOperationForm = (e) => {
        e.preventDefault()
        this.setState({
            isClicked: this.state.isClicked === false ? true : false,
        })
    }

    handleFinish = (e) => {
        e.preventDefault()
        this.setState({
            disabled: true
        })
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
            <li className={this.props.task.status==="closed" ? "task-list__task task-success" : "task-list__task"}>
                <h1 className="task-list__task-name">{this.props.task.name}</h1>
                <p className="task-list__task-description">{this.props.task.description}</p>
                <p className="task-list__task-time">{this.props.task.timeSpent} s</p>
                <button className="task-list__task-btn task-list__task-btn-finish" onClick={this.handleFinish} disabled={this.state.disabled}>Finish</button>
                <button className="task-list__task-btn task-list__task-btn-add" onClick = {this.addOperationForm} disabled={this.state.disabled}>{this.state.isClicked ? "Hide operation" : "Add operation"}</button>
                {this.state.isClicked && <OperationForm addOperation={this.props.add} id={this.props.task.id}/>}
                <Operations operations = {this.props.task.operations} start={this.props.start} stop={this.props.stop} id={this.props.task.id}/>
            </li>
        )
    }
}