import React, { Component } from 'react';
import '../css/Menu.css'

class MenuItem extends Component {
    render() {
        return (
            <a href={this.props.menuItem.url} style={{textDecoration: 'none'}}>
                <div className='menuItem'>
                    <span className='title'>
                        {this.props.menuItem.title}
                    </span>
                </div>
            </a>
        )
    }
}

export default MenuItem;
