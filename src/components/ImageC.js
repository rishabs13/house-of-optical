import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './imageC.css';
import pic1 from "../images/Contact Lenses- Blue_130.webp";
import pic2 from "../images/Contact Lenses- Dark Grey_150.webp";
import pic3 from "../images/Contact Lenses- Light Blue_132.webp";
import pic4 from "../images/Contact Lenses-Grey_145.webp";

const ImageC = () => {
  return (
    <div className='main'>
      <Carousel className='ImageContainer'>
        <div>
          <img src={pic1} />
          <p className="legend">$130</p>
        </div>
        <div>
          <img src={pic2} />
          <p className="legend">$150</p>
        </div>
        <div>
          <img src={pic3} />
          <p className="legend">$132</p>
        </div>
        <div>
          <img src={pic4} />
          <p className="legend">$145</p>
        </div>
      </Carousel>
    </div>
  )
}

export default ImageC
