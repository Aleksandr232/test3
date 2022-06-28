import React from "react";

/* import men from './img/men.png'; */
import ne from './ne.png';
import rb from './rb.png';
import at from './at.png';
import ab from './ab.png';
import men from './men.png';
import arrow from './arrow.png'


import './case.css';

const Case=()=>{
    return(
        <div className="case">
            <div className="case_title">Кейсы</div>
            <img className="ne" src={ne} alt="" />
            <img className="at" src={at} alt="" />
            <img className="rb" src={rb} alt="" />
            <img className="ab" src={ab} alt="" />
            <img className="men"  src={men} alt="" />
            <div className="elclips">
                <img className="arrow" src={arrow}></img>
                <div className="arrow_title">Показать ещё</div>
            </div>
        </div>
    )
}


export default Case