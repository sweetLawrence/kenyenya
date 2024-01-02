import React from 'react';
import ReactImageGallery from 'react-image-gallery';

const Carousel = ({images=[]}) => {
  return (
    <ReactImageGallery 
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        autoPlay
        slideInterval={5000}
        slideDuration={1500}
        showFullscreenButton={false}
        items={images}
    />
  )
}

export default Carousel