import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Header from './Header';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
            </Switch>
        </div>
    );
}

export default App;
