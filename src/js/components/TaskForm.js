import React from "react";
import uniqid from "uniqid";

export default
class TaskForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: ""
        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTasks({
            id: uniqid(),
            name: this.state.name,
            description: this.state.description,
            status: "open",
            timeSpent: 0,
            operations: []
        })
    }

    render() {
        return(
            <form className="form-group" className="new-task" onSubmit={this.handleSubmit}>
                <h2>What would you work on?</h2>
                <input value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" name="title" placeholder="Task title" />
                <input value={this.state.description} onChange={this.handleChange} type="text" className="form-control" id="description" name="description" placeholder="Task description"/>
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        )
    }
}

