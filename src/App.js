import React from 'react';
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./js/components/LandingPage";
import MainApp from "./js/components/MainApp";

export default 
class App extends React.Component {
  render() {
      return (
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/app" component={MainApp} />
          </Switch>
      </Router>
      )
  }
}

