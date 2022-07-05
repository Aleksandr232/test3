import React from "react";
import arrow from './arrow.png'


import './footer.css'


const Footer=()=>{
    return(
        <div className="footer">
            <div className="contact">Контакты</div>
            <div className="namber">8 800 700 60 50</div>
            <div className="infocent">info@cent</div>
            <div className="kazan">Казань, Карла Маркса 9</div>
            <div className="agents">Агенство Cent, 2017</div>
            <input className="name" type="text" placeholder="Ваше имя" />
            <input className="email" type="text" placeholder="Email" />
            <input className="phone" type="text" placeholder="Телефон" />
            <input className="question" type="text" color="white" placeholder="Что вы ищете" />
            <input className="message" type="text" placeholder="Сообщения" />
            <div className="round_btn">
               <div className="round_mes">Отправить</div>
                <img className="arrow" src={arrow} alt="" />
            </div>

        </div>
    )
}

export default Footer