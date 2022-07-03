import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from './slideimg/slide1.png'
import slide6 from './slideimg/slide6.png'

import './asset.css'


const Asset=()=>{
    return(
    <div className="asset">
        <div className="title_asset">Наши активы</div>
           <div className="grid_img">
                <div>
                    <img className="slideimg" src={slide1} alt="" />
                    <div className="title1">Enter</div>
                </div>
                <div>
                    <img className="slideimg1" src={slide1} alt="" />
                    <div className="title2">Enter</div>
                </div>
                <div>
                    <img className="slideimg2" src={slide1} alt="" />
                    <div className="title3">Enter</div>
                </div>
                <div>
                    <img className="slideimg4"  src={slide1} alt="" />
                    <div className="title4">Enter</div>
                </div>
                <div>
                    <img className="slideimg5" src={slide1} alt="" />
                    <div className="title5">Enter</div>
                </div>
                <div>
                    <img className='slideimg6' src={slide6} alt="" />
                </div>
           
           </div>
    </div>
    )
}

export default Asset