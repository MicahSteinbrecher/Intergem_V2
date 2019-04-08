import React, { Component } from 'react';
import '../src/App.css';

import IMG1 from "./bracelet.jpg";
import IMG2 from "./DSC00210.jpg";
import IMG3 from "./IMG2.jpg";
//import IMG3 from "./DSC00240.jpg"
import IMG4 from "./IMG4.jpg";
import imgs from "./Imgs";
import Lightbox from 'react-images';
import SCREENS from './Screens';

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
        let activeScreen = this.props.activeScreen;

        if (prevProps.columns !== this.props.columns) {
            this.setState({columns: this.props.columns});
        }

        if (prevProps.activeScreen !== this.props.activeScreen) {
            this.setState({IMGS: imgs[this.props.activeScreen]});
        } else if (JSON.stringify(this.props.styles[SCREENS[activeScreen]])!== JSON.stringify(prevProps.styles[SCREENS[activeScreen]])){
            console.log('filter update');
            this.filterImages();
        }
    }

    filterImages() {
        console.log('fire image filter');
        let activeScreen = this.props.activeScreen;
        let imgSet = imgs[activeScreen];
        let styles = this.props.styles[SCREENS[activeScreen]];
        let result = [];
        debugger;
        let keys = Object.keys(styles);
        for (let i = 0; i < imgSet.length; i++) {
            for (let j = 0; j < keys.length; j++) {
                //checks if filter is set
                if (!styles[keys[j]]) {
                    if (keys.length-1 === j){
                        result.push(imgSet[i]);
                        break;
                    }
                    continue;
                }

                //filters images when meta data is array
                if (Array.isArray(imgSet[i][keys[j]])){
                    if (imgSet[i][keys[j]].includes(styles[keys[j]])) {
                        if (j === keys.length - 1) {
                            result.push(imgSet[i]);
                            break;
                        }
                        continue;
                    } else {
                        break;
                    }

                }

                if (imgSet[i][keys[j]] === styles[keys[j]]) {
                    if (j === keys.length - 1) {
                        result.push(imgSet[i]);
                        break;
                    }
                    continue;
                }
                break;
            }
        }
        this.setState({IMGS:result})
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
