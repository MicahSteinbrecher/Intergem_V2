import React, { Component } from 'react';
import './App.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Dropdown } from 'react-bootstrap';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeScreen !== this.props.activeScreen) {
            this.props.resetFilter();
        }
    }

    render() {
        if (this.props.activeScreen===1) {
            return (
                <div className="filter">
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle style={{width:'100px', color: '#282c34', backgroundColor: 'aliceblue', borderColor: 'Black'}} className="Font" variant="info" id="dropdown-basic">
                                Metal
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="Font">
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'metal', 'Platinum')}>Platinum</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'metal', 'Yellow Gold')}>Yellow Gold</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'metal', 'White Gold')}>White Gold</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="Category">{this.props.styles.engagementRings.metal}</p>
                    </div>

                    <div className="row marginTop">
                        <Dropdown>
                            <Dropdown.Toggle style={{width:'100px', color: '#282c34', backgroundColor: 'aliceblue', borderColor: 'Black'}} className="Font" variant="info" id="dropdown-basic">
                                Style
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="Font">
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'style','Halo')}>Halo</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'style','Fancy')}>Fancy</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.props.onSelect(1,'style','Vintage')}>Vintage</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="Category">{this.props.styles.engagementRings.style}</p>
                    </div>
                </div>
            );
        } else if (this.props.activeScreen===2) {
            return (
                <div className="filter">
                    <div className="row">
                        <Dropdown>
                            <Dropdown.Toggle style={{width:'100px', color: '#282c34', backgroundColor: 'aliceblue', borderColor: 'Black'}} className="Font" variant="info" id="dropdown-basic">
                                Band
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="Font">
                                <Dropdown.Item onSelect={()=>this.props.onSelect(2,'style','Wedding')}>Wedding Band</Dropdown.Item>
                                <Dropdown.Item onSelect={()=>this.props.onSelect(2,'style','Eternity')}>Eternity Band</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <p className="Category">{this.props.styles.weddingBands.style}</p>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p className="Item"> TODO </p>
                </div>
            );
        }
    }
}

export default Filter;
