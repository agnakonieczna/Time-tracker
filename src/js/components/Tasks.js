import React from "react";
import Task from "./Task";

export default
class Tasks extends React.Component{
    render() {
        return(
            <ul className="tasks-list">
                {this.props.tasks.map(task => {
                    return <Task key={task.id} task={task} onFinish={this.props.onFinish} start={this.props.start} stop={this.props.stop} add={this.props.add}/>
                })}
            </ul>
        )
    }
}