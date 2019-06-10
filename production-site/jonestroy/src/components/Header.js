import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <a href='/' className='link'>
                    <h2>jonestroy.com</h2>
                </a>
            </div>
        );
    }
}

export default Header;
