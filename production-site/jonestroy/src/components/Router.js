import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'

function RouterRooter() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Home} />
        </Router>
    );
}

export default RouterRooter;
