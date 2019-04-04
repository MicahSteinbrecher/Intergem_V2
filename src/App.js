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
            activeScreen: 1,
            styles: [[],[],[],[]],
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

    handleClick = (index) => {
        this.setState({
            activeScreen: index,
        })
    }

    handleSelect = (activeScreen, category, style) => {
        console.log('handle select fired: ');
        console.log('screen: ' + activeScreen + ', category: ' + category + ', style: ' + style);
        let styles= this.state.styles;
        styles[activeScreen][category] = style;
        this.setState({
                styles: styles,
            }
        );
    }

    resetFilter= () => {
        this.setState({
            styles: [[],[],[],[]],
        });
    }


    render() {
        return (
            <div className="App">
                <div className='Space' />
                <Menu resetFilter={this.resetFilter} styles={this.state.styles} onSelect={this.handleSelect} columns={this.state.columns} onClick={this.handleClick} activeScreen={this.state.activeScreen}/>
                <ImageDisplay columns={this.state.columns} activeScreen={this.state.activeScreen}/>
            </div>
        );
    }
}

export default windowSize(App);
