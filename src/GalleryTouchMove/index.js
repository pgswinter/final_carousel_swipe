import React from 'react';
import ItemGallery from './ItemGallery';
import NavigationBullet from './NavigationBullet';
import {
    styleGallery,
    styleGalleryUl,
    styleItemGalleryParagraph,
    styleItemGallerySpan,
    styleBullerOl,
} from './styles';

import { dataGallery } from './data';

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            x0: null,
            i: 0,
            '--i': 0,
            locked: false,
        }
    }

    componentDidMount() {
        this.galleyUl = React.createRef()
    }

    unify = (e) =>  e.changedTouches ? e.changedTouches[0] : e;
    lock = async (e) => {
        this.setState({
            x0: this.unify(e).clientX, //  dragging mouse width
        })
        await this.setState({
            locked: !this.state.locked
        })
    };

    move = async (e) => {
        const {x0, i, w} = this.state;
        if(x0 || x0 === 0) {
            let dx = this.unify(e).clientX - x0,
                s = Math.sign(dx); // dragging next s = -1. Other hand, previous s = 1 

            if(
                (i > 0 || s < 0) && 
                (i < dataGallery.length - 1 || s > 0) 
            ) {
                await this.setState({
                    '--i': this.state.i -= s,
                });
            }
            if(i === 0 && s > 0) {
                await this.setState({
                    i: dataGallery.length - 1,
                    '--i': dataGallery.length - 1,
                })
            }
            if(i === dataGallery.length - 1 && s < 0) {
                await this.setState({
                    i: 0,
                    '--i': 0
                })
            }
            await this.setState({
                x0: null,
            })
        }
    };

    handleMouseDown = (e) => {
        this.lock(e);
    };

    handleTouchStart = (e) => {
        this.lock(e);
    };

    handleTouchMove = (e) => {
        e.preventDefault()
    }

    handleMouseUp = (e) => {
        this.move(e)
    };

    handleTouchEnd = (e) => {
        this.move(e)
    };

    handleBulletClick = (index) => {
        this.setState({
            i: index,
            '--i': index,
        })
    }

    render() {
        const lengthData = dataGallery.length;
        return <React.Fragment>
            <div className="gallery_wrapper" style={styleGallery}>
                <p style={styleItemGalleryParagraph}>
                    <span style={styleItemGallerySpan}>{`${this.state.i+1}/${lengthData}`}</span>
                    公式ギャラリ
                </p>
                <ul
                    className={`${this.state.locked && 'smooth'}`}
                    style={{
                        ...styleGalleryUl,
                        ...{
                            '--n': dataGallery.length,
                            '--i': this.state["--i"]
                        }
                    }}
                    onMouseDown={(e) => this.handleMouseDown(e)}
                    onTouchStart={(e) => this.handleTouchStart(e)}
                    onTouchMove={(e) => this.handleTouchMove(e)}
                    onMouseUp={(e) => this.handleMouseUp(e)}
                    onTouchEnd={(e) => this.handleTouchEnd(e)}
                >
                    <ItemGallery
                        data={dataGallery}
                    />
                </ul>
                <ol style={styleBullerOl}>
                    <NavigationBullet 
                        data={dataGallery}
                        activeIndex={this.state.i}
                        handleBulletClick={this.handleBulletClick}
                    />
                </ol>
            </div>
        </React.Fragment>
    }
}

export default Gallery