import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Header from './Header';
import ReactTut from './ReactTut';
import MernTut from './MernTut';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/projects/react-tut' component={ReactTut} />
                <Route exact path='/projects/mern-tut' component={MernTut} />
            </Switch>
        </div>
    );
}

export default App;
