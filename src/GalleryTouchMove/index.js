import React from 'react';
import ItemGallery from './ItemGallery';
import NavigationBullet from './NavigationBullet';
import {
    styleGallery,
    styleGalleryUl,
    styleItemGalleryParagraph,
    styleItemGallerySpan,
    olWrapper,
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
            lockedBullet: false,
            '--tx': 0,
        }
        this.gallery = React.createRef();
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
            locked: !this.state.locked,
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
    
    // drag bullet
    // lockBullet = async (e) => {
    //     this.setState({
    //         x0: this.unify(e).clientX, //  dragging mouse width
    //     })
    //     await this.setState({
    //         lockedBullet: !this.state.lockedBullet
    //     })
    // };

    // dragBullet = async (e) => {
    //     e.preventDefault();
    //     const widthDevice = this.gallery.current.offsetWidth;
    //     let distanceDragging = Math.round(this.unify(e).clientX - this.state.x0);
    //     distanceDragging = distanceDragging > 0 ? 0 : distanceDragging;
    //     const widthOfOl = dataGallery.length * 110; // 110 is width of bullet img
    //     // const setDistance = Math.abs(distanceDragging) <= widthOfOl ? distanceDragging : widthOfOl;
    //     if(widthOfOl > widthDevice) {
    //         await this.setState({
    //             '--tx': `${distanceDragging}px`
    //         })
    //     }
    //     console.log(this.state["--tx"])
    // }
    // handleBulletMouseDown = (e) => {
    //     this.lockBullet(e);
    // };

    // handleBulletTouchStart = (e) => {
    //     this.lockBullet(e);
    // };
    // handleBulletMouseUp = (e) => {
    //     this.dragBullet(e)
    // };

    // handleBulletTouchEnd = (e) => {
    //     this.dragBullet(e)
    // };

    render() {
        const lengthData = dataGallery.length;
        return <React.Fragment>
            <div className="gallery_wrapper" style={styleGallery} ref={this.gallery}>
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
                <div
                    className="olWrapper"
                    style={{
                        ...olWrapper,
                        // ...{
                        //     '--m': dataGallery.length,
                        // }
                    }}
                >
                    <ol 
                        className={`${this.state.lockedBullet && 'smooth'}`}
                        style={{
                            ...styleBullerOl,
                            ...{
                                '--m': dataGallery.length,
                            }
                        }}
                        // onMouseDown={(e) => this.handleBulletMouseDown(e)}
                        // onTouchStart={(e) => this.handleBulletTouchStart(e)}
                        // onTouchMove={(e) => this.handleTouchMove(e)}
                        // onMouseUp={(e) => this.handleBulletMouseUp(e)}
                        // onTouchEnd={(e) => this.handleBulletTouchEnd(e)}
                    >
                        <NavigationBullet 
                            data={dataGallery}
                            activeIndex={this.state.i}
                            handleBulletClick={this.handleBulletClick}
                        />
                    </ol>
                </div>
                
            </div>
        </React.Fragment>
    }
}

export default Gallery