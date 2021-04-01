import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './imageC.css';

const ImageC = () => {
  const images = [
    {name: 'carousel image 1', src: './images/carousel-1.jpg', alt: 'frame-img-1'},
    {name: 'carousel image 2', src: './images/frame-2.png', alt: 'frame-img-2'},
    {name: 'carousel image 3', src: './images/carousel-3.jpg', alt: 'frame-img-3'},
    {name: 'carousel image 4', src: './images/carosel-6.jpg', alt: 'frame-img-4'},
  ]

  return (
    <div className='main'>
      <Carousel
      className='ImageContainer'
      showThumbs={false}
      dynamicHeight={false}
      showStatus={false}
      >
        {images.map(image => (
          <div className="ImageContainer-img" key={image.name}>
            <img className='img' src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageC