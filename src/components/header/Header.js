import React from "react";
import './Header.css'


const Header=()=>{
    return(
        <section className="header">
            <div className="logo">Cent</div>
            <div>
                <a className="menu" href="">кейсы</a>
                <a className="menu1" href="">о нас</a>
                <a className="menu2" href="">контакты</a>
                <a className="menu3" href="">новости</a>
                <a className="menu4" href="">клиенты</a>
            </div>
        </section>
    )
}

export default Header