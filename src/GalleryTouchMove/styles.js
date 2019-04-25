import { dataGallery } from './data';

export const closeButton = {
    'width': '50px',
    'height': '50px',
    'display': 'block',
    'cursor': 'pointer',
    'position': 'fixed',
    zIndex: 99999999999,
    right: '0',
    top: '0',
    color: '#fff',
    'borderStyle': 'none',
    backgroundColor: '#005E95'
}

export const perfectCenter = {
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'transform': 'translate(-50%, -50%)',
}

export const commonUlOl = {
    paddingLeft: 0,
}

export const styleGallery = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    zIndex: 99999,
    'top': 0,
    'left': 0,
    backgroundColor: '#000',
}

export const styleGalleryUl = {
    'listStyleType': 'none',
    'paddingLeft': '0',
    '--n': '1',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    width: 'calc(var(--n)*100%)',
    'overflowX': 'hidden',
    'margin': 0,
    transform: 'translate(calc(var(--i, 0)/var(--n)*-100% + var(--tx, 0px)))',
    transition: 'transform .5s ease-out',
}

export const styleItemGalleryLi = {
    width: '100%', /* can't take this out either as it breaks Chrome */
    width: 'calc(100%/var(--n))',
    userSelect: 'none',
    pointerEvents: 'none',
}

export const smooth = {
    transition: 'transform  calc(var(--f, 1)*.5s) ease-out' 
}

export const olWrapper = {
    'width': '100vw',
    'overflowX': 'scroll',
    'overflowY': 'hidden',
    'height': '100px',
    bottom: 0,
    position: 'absolute',
    left: '5px',
}

// export const olWrapper = {
//     '--m': '1',
//     '--tx': '0px',
//     'width': '100%',
//     'width': 'calc(var(--m)*110px',
//     'listStyleType': 'none',
//     bottom: '0',
//     position: 'absolute',
//     left: '0',
//     margin: '0',
//     'top': 'unset',
// }

// export const styleBullerOl = {
//     width: '100vw',
//     paddingLeft: 0,
//     'overflowX': 'scroll',
//     'overflowY': 'hidden',
//     height: 
// }

export const styleBullerOl = {
    '--m': '1',
    '--tx': '0px',
    'width': '100%',
    'width': 'calc(var(--m)*110px',
    'listStyleType': 'none',
    paddingLeft: 0,
    // bottom: 0,
    // position: 'absolute',
    // left: '5px',
    margin: '0',
    // 'overflowX': 'scroll',
    // 'overflowY': 'hidden',
    // transform: 'translate(var(--tx, 0px))',
    // transition: 'transform .5s ease-out',
}

export const styleBullet = {
    'float': 'left',
    'width': '100px',
    'height': '80px',
    'marginRight': '5px',
    'position': 'relative',
    'cursor': 'pointer',
    'boxSizing': 'border-box',
}

export const styleBulletImg = {
    'width': '100%',
    'border': '2px solid #0081CC',
    'borderRadius': '4px',
    'pointerEvents': 'none',
}

export const styleBulletImgActive = {
    'border': '2px solid #fff',
}

export const styleItemGallery = {
    'width': '100%',
    'height': '100vh',
    'position': 'relative',
}
// export const styleItemGallery = {
//     ...perfectCenter,
//     ...{
//         'width': '45%',
//     }
// }

export const styleItemGallerySpan = {
    'position':'absolute',
    'left': '30px',
    'letterSpacing': '15px'
}

// export const styleItemGalleryImg = {
//     'width': '100%'
// }

export const styleItemGalleryImg = {
    ...perfectCenter,
    ...{
        'width': '45%'
    },
}

export const styleItemGalleryParagraph = {
    'position': 'absolute',
    'top': '0',
    backgroundColor: '#0081CC',
    'display': 'block',
    'width': '100%',
    // 'width': '100vw',
    'textAlign': 'center',
    'margin': '0',
    'color': '#fff',
    'height': '50px',
    'lineHeight': '2.8'
}

export const styleNext = {
    backgroundColor: 'red',
    cursor: 'pointer',
    'position': 'absolute',
    'width': '100px',
    'height': '100px',
    'right': '10%',
    'top': 'calc(50% - 50px)',
    content: "\E91A",
    fontFamily: 'iconstay !important',
}

export const styleNextBefore = {
    content: "\E91A",
    fontFamily: 'iconstay !important',
}

export const stylePrev = {
    'position': 'absolute',
    'width': '100px',
    'height': '100px',
    'left': '10%',
    'top': 'calc(50% - 50px)',
    backgroundColor: 'red',
    cursor: 'pointer',
}