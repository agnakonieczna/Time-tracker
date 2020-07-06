import React from "react";
import Operation from "./Operation";

export default
class Operations extends React.Component {
    render() {
        return (
            <ul className="operations-list">
                {
                    this.props.operations.map(operation => {
                        return <Operation key ={operation.id} operation={operation} start={this.props.start} stop={this.props.stop} id={this.props.id} />
                    })
                }
            </ul>
        )
    }
}