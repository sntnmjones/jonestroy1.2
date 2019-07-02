import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../css/Project.css'

class Project extends Component {
    render() {
        return (
            <div className='mainDiv'>
                <Header />
                <div className='secondDiv'>
                    <Menu />

                    {/* Content for Project.js */}
                    <div className='content'>
                        <h3 className='banner'>Projects</h3>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;