import React from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import img from "../../images/logo.png";

export default
class HeaderApp extends React.Component {
    render() {
        return (
            <Router>
                <header className="header">
                    <div className="wrapper">
                        <img src={img} alt="logo"/>
                        <Link to="/">Go to Main Page</Link>
                    </div>
                </header>
            </Router>
    
        )
    }
}