import React, { Component } from 'react';
import './App.css';
import ImageDisplay from "./ImageDisplay";
import windowSize from "react-window-size";


class App extends Component {
    constructor(props){
        super(props);
        let displayWidth = props.windowWidth - 400;
        this.state = {
            columns: Math.floor(displayWidth/500),
            isOpen: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.windowWidth !== prevProps.windowWidth) {
            this.setState(
                {
                    columns: Math.floor((this.props.windowWidth - 400) / 500)
                }
            );
        }
    }

    render() {
        if (this.state.columns===0) {
            return (
                <div className="App">
                    <div className='topMenu'>
                        <h2 className="Title"> Intergem </h2>
                        <p className="topItem">Favorites</p>
                        <p className="topItem">Engagement Rings</p>
                        <p className="topItem">Fine Jewelry</p>
                        <p className="topItem">Contact</p>

                    </div>
                    <ImageDisplay columns={this.state.columns}/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <div className='Space' />
                    <div className='Menu'>
                        <h2 className="Header"> Intergem</h2>
                        <p className="Item"> Favorites </p>
                        <p className="Item"> Engagement Rings</p>
                        <p className="Item"> Fine Jewelry</p>
                        <p className="Item"></p>
                        <br/>
                        <p className="Contact"> Contact</p>
                        <p className="Author">&copy; Micah Steinbrecher</p>
                    </div>
                    <ImageDisplay columns={this.state.columns}/>
                </div>
            );
        }
    }
}

export default windowSize(App);
