import React, { Component } from 'react';
import './App.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'react-bootstrap';

class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            metal: '',
            style: ''
        }
    }

    handleMetalSelect(metal) {
        this.setState({metal: metal})
    }

    handleStyleSelect(style) {
        this.setState({style: style})
    }

    render() {
        console.log(this.props);
        if (this.props.activeScreen===1) {
            return (
                <div className="filter">
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle style={{width:'100px', color: 'aliceblue'}} variant="info" id="dropdown-basic">
                                Metal
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={()=>this.handleMetalSelect('platinum')}>Platinum</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.handleMetalSelect('yellow gold')}>Yellow Gold</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.handleMetalSelect('white gold')}>White Gold</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="Category">{this.state.metal}</p>
                    </div>

                    <div className="row marginTop">
                        <Dropdown>
                            <Dropdown.Toggle style={{width:'100px', color: 'aliceblue'}} variant="info" id="dropdown-basic">
                                Style
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={()=>this.handleStyleSelect('Halo')}>Halo</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.handleStyleSelect('Fancy')}>Fancy</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.handleStyleSelect('Vintage')}>Vintage</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="Category">{this.state.style}</p>
                    </div>
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

export default Filter;
