import React, { Component } from 'react';
import '../src/App.css';

import IMG1 from "./bracelet.jpg";
import IMG2 from "./DSC00210.jpg";
import IMG3 from "./IMG2.jpg";
//import IMG3 from "./DSC00240.jpg"
import IMG4 from "./IMG4.jpg";
import imgs from "./Imgs";
import Lightbox from 'react-images';


class ImageDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            IMGS: imgs[1],
            columns: props.columns,
            isOpen: false,
            imageIndex: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.columns !== this.props.columns) {
            this.setState({columns: this.props.columns});
        }
        if (prevProps.activeScreen !== this.props.activeScreen) {
            this.setState({IMGS: imgs[this.props.activeScreen]});
        }
    }

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    handleNext = () => {
        this.setState({
            imageIndex: this.state.imageIndex+1,
        })
    }

    handlePrev = () => {
        this.setState({
            imageIndex: this.state.imageIndex - 1,
        })
    }

    handleClick = (index) => {
        this.setState({
            isOpen: true,
            imageIndex: index,
        })
    }

    render() {

        if (this.state.columns == 0 || this.state.columns == 1) {
            const imgsList = this.state.IMGS.map((img, index) =>
                <img src={img.src} onClick={()=>this.handleClick(index)} />
            );
            if (this.state.columns == 0) {
                 return (
                    <div className="singleCol">
                        <Lightbox
                            images={this.state.IMGS}
                            isOpen={this.state.isOpen}
                            onClickNext={this.handleNext}
                            onClickPrev={this.handlePrev}
                            onClose={this.handleClose}
                            currentImage={this.state.imageIndex}
                        />
                        {imgsList}
                    </div>
                );
            } else
                return (
                    <div className="Container">
                        <Lightbox
                            images={this.state.IMGS}
                            isOpen={this.state.isOpen}
                            onClickNext={this.handleNext}
                            onClickPrev={this.handlePrev}
                            onClose={this.handleClose}
                            currentImage={this.state.imageIndex}
                        />
                        <div className="singleCol">
                            {imgsList}
                        </div>
                    </div>
                )
        }

        else {
            var imgsLists = [];
            for (let i=0; i < this.state.IMGS.length; i++){
                if (i < this.state.columns) {
                    imgsLists[i] = [this.state.IMGS[i].src];
                } else {
                    imgsLists[(i % this.state.columns)].push(this.state.IMGS[i].src);
                }
            }

            for (let i = 0; i < imgsLists.length; i++) {
                imgsLists[i] = imgsLists[i].map((img, index) =>
                    <img src={img} onClick={()=>this.handleClick(index)} />
                );
            }

            const columns = imgsLists.map((imgs) =>
                <div className="singleCol">
                    {imgs}
                </div>
            );

            return (
                <div className="Container">
                    <Lightbox
                        images={this.state.IMGS}
                        isOpen={this.state.isOpen}
                        onClickNext={this.handleNext}
                        onClickPrev={this.handlePrev}
                        onClose={this.handleClose}
                        currentImage={this.state.imageIndex}
                    />
                    {columns}
                </div>
            );
        }
    }
}

export default ImageDisplay;
