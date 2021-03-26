import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './imageC.css';
// import pic1 from "../images/Contact Lenses- Blue_130.webp";
// import pic2 from "../images/Contact Lenses- Dark Grey_150.webp";
// import pic3 from "../images/Contact Lenses- Light Blue_132.webp";
// import pic4 from "../images/Contact Lenses-Grey_145.webp";

const ImageC = () => {
  return (
    <div className='main'>
      <Carousel
      className='ImageContainer'
      showThumbs={false}
      dynamicHeight={false}
      showStatus={false}
      >
        <div className='ImageContainer-img'>
          <img className={'img'} src={'./images/carousel-1.jpg'} alt="frame-img-1"/>
          {/* <p className="legend">$130</p> */}
        </div>
        <div className='ImageContainer-img'>
          <img className={'img'} src={'./images/frame-2.png'} alt="frame-img-2"/>
          {/* <p className="legend">$150</p> */}
        </div>
        <div className='ImageContainer-img'>
          <img className={'img'} src={'./images/carousel-3.jpg'} alt="frame-img-3"/>
          {/* <p className="legend">$132</p> */}
        </div>
        <div className='ImageContainer-img'>
          <img className={'img'} src={'./images/carosel-6.jpg'} alt="frame-img-4" />
          {/* <p className="legend">$145</p> */}
        </div>
      </Carousel>
    </div>
  )
}

export default ImageC