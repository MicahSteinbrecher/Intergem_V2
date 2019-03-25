import React, { Component } from 'react';
import '../src/App.css';

import IMG1 from "./DSC00210.jpg";
import IMG2 from "./IMG2.jpg";
import IMG3 from "./DSC00240.JPG"
import IMG4 from "./IMG4.jpg";


class ImageDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columns: props.columns,
            IMGS: [IMG1, IMG2, IMG3, IMG4],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.columns !== this.props.columns) {
            this.setState({columns: this.props.columns});
        }
    }

    render() {

        if (this.state.columns == 0 || this.state.columns == 1) {
            const imgsList = this.state.IMGS.map((img) =>
                <img src={img} />
            );
            if (this.state.columns == 0) {
                return (
                    <div className="singleCol">
                        {imgsList}
                    </div>
                )
            } else
                return (
                    <div className="Container">
                        <div className="singleCol">
                            {imgsList}
                        </div>
                    </div>
                )
        }

        else {
            var imgsLists = [];
            for (let i=0; i < this.state.IMGS.length; i++){
                console.log(i%this.state.columns);
                if (i < this.state.columns) {
                    imgsLists[i] = [this.state.IMGS[i]];
                } else {
                    imgsLists[(i % this.state.columns)].push(this.state.IMGS[i]);
                }
            }

            for (let i = 0; i < imgsLists.length; i++) {
                imgsLists[i] = imgsLists[i].map((img) =>
                    <img src={img} />
                );
            }

            const columns = imgsLists.map((imgs) =>
                <div className="singleCol">
                    {imgs}
                </div>
            );

            return (
                <div className="Container">
                    {columns}
                </div>
            );
        }
    }
}

export default ImageDisplay;
