import React, { Component } from 'react';
import './App.css';
import ImageDisplay from "./ImageDisplay";
import windowSize from "react-window-size";
import Menu from './Menu.js';
import SCREENS from './Screens.js';


class App extends Component {
    constructor(props){
        super(props);
        let displayWidth = props.windowWidth - 400;
        this.state = {
            columns: Math.floor(displayWidth/500),
            isOpen: false,
            activeScreen: 1,
            styles: {
                favorites: {},
                engagementRings: {
                    metal: '',
                    style: '',
                },
                weddingBands: {
                    style: ''
                },
                fineJewelry: {
                    type: '',
                }
            },
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
        console.log('new filter selection for: ' + SCREENS[activeScreen]);
        let newStyles = JSON.parse(JSON.stringify(this.state.styles));
        newStyles[SCREENS[activeScreen]][category]=style;

        this.setState({
                styles: newStyles,
            }
        );
    }

    resetFilter= () => {
        this.setState({
            styles: {
                favorites: {},
                engagementRings: {
                    metal: '',
                    style: '',
                },
                weddingBands: {
                    style: ''
                },
                fineJewelry: {
                    type:'',
                }
            },
        });
    }


    render() {
        return (
            <div className="App">
                <div className='Space' />
                <Menu resetFilter={this.resetFilter} styles={this.state.styles} onSelect={this.handleSelect} columns={this.state.columns} onClick={this.handleClick} activeScreen={this.state.activeScreen}/>
                <ImageDisplay styles={this.state.styles} columns={this.state.columns} activeScreen={this.state.activeScreen}/>
            </div>
        );
    }
}

export default windowSize(App);
