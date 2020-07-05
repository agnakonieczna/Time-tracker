import React from "react";
import uniqid from "uniqid";

export default
class OperationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addOperation(this.props.id, {
            id: uniqid(),
            name: this.state.name,
            timeSpent: 0
        })
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.name} onChange={this.handleChange} type="text" className="form-control" id="name" name="title" placeholder="Operation title"/>
            <input type="submit" value="Add" className="btn btn-primary"/>
        </form>
        )
    }
}