import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../css/Home.css'

class Home extends Component {

    text = "Testing";

    render() {
        return (
            <div className='mainDiv'>
                <Header />
                <div className='secondDiv'>
                    <Menu />

                    {/* Content for Home.js */}
                    <div className='content'>
                        <p>{this.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;