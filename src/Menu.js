import React, { Component } from 'react';
import './App.css';
import ImageDisplay from "./ImageDisplay";
import windowSize from "react-window-size";


class Menu extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.columns===0) {
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
                <div className='Menu'>
                    <div>
                        <h2 className="Header"> Intergem</h2>
                        <p className="Item"> Favorites </p>
                        <p className="Item"> Engagement Rings</p>
                        <p className="Item"> Fine Jewelry</p>
                        <p className="Contact">  </p>
                    </div>
                    <div>
                        <p className="Item"> P: (214) 742-3771 </p>
                        <p className="Item"> E: Intergem@att.net </p>
                    </div>
                </div>
            );
        }
    }
}

export default Menu;
