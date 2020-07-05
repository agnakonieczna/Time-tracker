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
            <form className="task-form" onSubmit={this.handleSubmit}>
                <h2 className="task-form__title">What would you work on?</h2>
                <input className="task-form__input task-form__input-name" value={this.state.name} onChange={this.handleChange} type="text"  id="name" name="title" placeholder="Task title" />
                <input className="task-form__input task-form__input-description" value={this.state.description} onChange={this.handleChange} type="text" id="description" name="description" placeholder="Task description"/>
                <input className="task-form__input-submit" type="submit" value="Add"/>
            </form>
        )
    }
}

