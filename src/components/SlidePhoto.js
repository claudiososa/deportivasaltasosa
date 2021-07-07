import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../assets/styles/SlidePhoto.css';
import slide1 from '../assets//images/slide-1.jpg';
import slide2 from '../assets//images/slide-2.jpg';
import slide3 from '../assets//images/slide-3.jpg';


export default function SlidePhoto () {
  return (
    <div className="slide-container">
    <Fade>
      <div className="each-fade">
        <div className="image-container">
          <img src={slide1} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={slide2} />
        </div>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={slide3} />
        </div>
      </div>
    </Fade>
  </div>
  )
}