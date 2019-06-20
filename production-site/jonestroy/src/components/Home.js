import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <Menu />
                </div>
            </div>
        );
    }
}

export default Home;