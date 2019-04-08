import React from 'react';
import {
    styleItemGalleryLi,
    styleItemGallery,
    styleItemGalleryImg,
    styleItemGalleryParagraph,
    styleItemGallerySpan
} from './styles';

class ItemGallery extends React.Component {

    render() {
        const {data} = this.props
        return data.map((item, i) => {
            return <li
                style={styleItemGalleryLi}
                key={item.id}
            >   
                <div className="itemGallery" style={styleItemGallery}>
                    <img style={styleItemGalleryImg} src={item.img} />
                </div>
            </li>
        })
    }
}

export default ItemGallery;