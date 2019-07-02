import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../css/Home.css'

class Home extends Component {

    story = 'After working in a sawmill for 14 years I decided to follow my interest in programming. Through my journey in college, I have learned alot about the software engineering process. From the importance of using git for version control and team collaboration, to the significance of the difference between O(n) and O(log n).'

    render() {
        return (
            <div className='mainDiv'>
                <Header />
                <div className='secondDiv'>
                    <Menu />

                    {/* Content for Home.js */}
                    <div className='content'>
                        <h3 className='banner'>About Me</h3>
                        <ul>
                            <li>
                                {/* Story */}
                                <h5>My story</h5>
                                <li>
                                    {this.story}
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;