import React, { Component } from 'react';
import '../css/Menu.css';
import MenuItem from './MenuItem';


class Menu extends Component {

    state = {
        menuItems: [
            {
                id: 1,
                title: 'About Me',
                url: 'about'
            },
            {
                id: 2,
                title: 'Projects',
                url: 'projects'
            }
        ]
    }

    render() {
        return (
            <div className='menu'>
                {this.state.menuItems.map((menuItem) => (
                    <MenuItem
                        key={menuItem.id}
                        menuItem={menuItem}
                        className='menuItem' />
                ))}
            </div>
        );
        // return this.props.menuItems.map((menuItem) => (
        //     <MenuItem key={menuItem.id} menuItem={menuItem} />
        // ))
    }
}

export default Menu;
