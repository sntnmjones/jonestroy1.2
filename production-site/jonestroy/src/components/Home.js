import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import '../css/Home.css'
import githubLogo from '../images/github.svg';
import leetcodeLogo from '../images/leetcode.png';
import linkedinLogo from '../images/linkedin.png';
import ccent from '../images/ccent.gif';

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
                        <div>
                            <h3 className='banner'>About Me</h3>
                            <ul>
                                <li>
                                    {/* Story */}
                                    <h5>My story</h5>
                                    <li>
                                        {this.story}
                                    </li>
                                </li>
                                <li>
                                    {/* Certs */}
                                    <h5>Certs</h5>
                                    <li>
                                        <img src={ccent} alt='ccent' />
                                    </li>
                                </li>
                                <li>
                                    {/* Links */}
                                    <h5>Links</h5>
                                    <li>
                                        <a href='https://github.com/sntnmjones'><img src={githubLogo} alt='github' /></a>
                                        <a href='https://leetcode.com/sntnmjones/'><img src={leetcodeLogo} alt='leetcode' /></a>
                                        <a href='https://www.linkedin.com/in/jones-troy/'><img src={linkedinLogo} alt='linkedin' /></a>
                                    </li>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;