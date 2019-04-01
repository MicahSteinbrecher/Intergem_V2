import React, { Component } from 'react';
import './App.css';
import ImageDisplay from "./ImageDisplay";
import windowSize from "react-window-size";
import Menu from './Menu.js';


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
        return (
            <div className="App">
                <div className='Space' />
                <Menu columns={this.state.columns}/>
                <ImageDisplay columns={this.state.columns}/>
            </div>
        );
    }
}

export default windowSize(App);
