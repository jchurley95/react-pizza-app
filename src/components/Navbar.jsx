import React, { Component } from 'react';
import MenuList from './MenuList';
import LocationList from './LocationList';
import Contact from './Contact';
import OurStory from './OurStory';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="">Our Story</a>
                <a href="">Menu</a>
                <h1>PIZZA-EXPRESS</h1>
                <a href="">Locations</a>
                <a href="">Contact</a>
            </nav>   
        );
    }
}

export default Navbar;