import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "../slider/slider";

import './asset.css'


const Asset=()=>{
    return(
    <div className="asset">
        <div className="title_asset">Наши активы</div>
            <Gallery/>
    </div>
    )
}

export default Asset