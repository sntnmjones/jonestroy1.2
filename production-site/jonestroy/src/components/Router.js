import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Projects from './Projects';

function RouterRooter() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/projects" component={Projects} />
        </Router>
    );
}

export default RouterRooter;
