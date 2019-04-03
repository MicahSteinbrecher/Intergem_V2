import React, { Component } from 'react';
import './App.css';


class Menu extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.screen=='engagementRing') {
            return (
                <div className='topMenu'>
                    <h2 className="Title"> Intergem </h2>
                    <p className="topItem">Favorites </p>
                    <p className="topItem">Engagement Rings </p>
                    <p className="topItem">Fine Jewelry </p>
                    <p className="topItem">Contact </p>
                </div>
            );
        } else {
            return (
                <div>
                    <p className="Item"> TODO </p>
                </div>
            );
        }
    }
}

export default Menu;
