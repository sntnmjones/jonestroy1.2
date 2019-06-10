import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';

function RouterRooter() {
    return (
        <Router>
            <div>
                <Header />
                <div>
                    <Menu />
                    <div>
                        {/* <Route exact path="/" component={Home} /> */}
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default RouterRooter;
