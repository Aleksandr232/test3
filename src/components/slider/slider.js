import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from './slideimg/slide1.png'


const Slider=()=>{
    return(
        <Carousel>
        <div>
            <img src={slide1} />
        </div>
        <div>
            <img src={slide1} />
        </div>
        <div>
            <img src={slide1} />
        </div>
        <div>
            <img src={slide1} />
        </div>
        <div>
            <img src={slide1} />
        </div>
        <div>
            <img src={slide1} />
        </div>
    </Carousel>
    )
}

export default Slider