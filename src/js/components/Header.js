import React from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import img from "../../images/logo.png";

export default
class Header extends React.Component {
    render() {
        return (
            <Router>
                <header className="header">
                    <div className="wrapper">
                        <img src={img} alt="logo"/>
                        <Link to="/app">Go to app</Link>
                    </div>
                </header>
            </Router>
    
        )
    }
}