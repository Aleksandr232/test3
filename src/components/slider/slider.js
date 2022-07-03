import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import slide1 from './slideimg/slide1.png'
import polslider from './slideimg/polslider.png'

import './slider.css'


const handleDragStart = (e) => e.preventDefault();

const items = [
    <div className="slides">
         <img className="slide1" src={slide1} onDragStart={handleDragStart} role="presentation" />
         <div className="textslide">Enter</div>
         <img className="slide2"  src={slide1} onDragStart={handleDragStart} role="presentation" />
         <div className="textslide1">Enter</div>
         <img className="slide3" src={slide1} onDragStart={handleDragStart} role="presentation" />
         <div className="textslide2">Enter</div>
         <img className="slide4" src={slide1} onDragStart={handleDragStart} role="presentation" />
         <div className="textslide3">Enter</div>
         <img className="slide5" src={slide1} onDragStart={handleDragStart} role="presentation" />
         <div className="textslide4">Enter</div>
         <img className="slide6" src={polslider} onDragStart={handleDragStart} role="presentation" />
         
    </div>,
    <div>
    <img className="slide0" src={slide1} onDragStart={handleDragStart} role="presentation" />
    <img className="slide2" src={slide1} onDragStart={handleDragStart} role="presentation" />
    <img className="slide3" src={slide1} onDragStart={handleDragStart} role="presentation" />
    <img className="slide4" src={slide1} onDragStart={handleDragStart} role="presentation" />
    <img className="slide5" src={slide1} onDragStart={handleDragStart} role="presentation" />
    <img className="slide6" src={polslider} onDragStart={handleDragStart} role="presentation"/> 
</div> 
    

    
   
    
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items}
        
    />
  );
}

export default Gallery