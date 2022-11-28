import React , { useState } from "react";
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import mail from '../../assets/mail.svg';
import open from '../../assets/menu-open.svg';
import close from '../../assets/menu-close.svg';

import './navbar.css';

export default function Navbar(props) {
    const [active, setActive] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-first">
                <a href="#home">&lt;home&gt;</a>
                <a href="#experience">&lt;experiences&gt;</a>
                <a href="#projects">&lt;projects&gt;</a>
            </div>
            <div className="navbar-second">
                <div className="navbar-second-link">
                    <a href="https://github.com/niyasrad"><img src={github} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/rfniyashameed/"><img src={linkedin} alt="linkedin"/></a>
                    <a href="mailto:niyasrad@gmail.com"><img src={mail} alt="mail"/></a>
                </div>
                <a href="https://www.linkedin.com/in/rfniyashameed/" target="_blank"><button>get in touch</button></a>
                {active?<img className="menu" onClick={() => setActive(!active)} src={close} alt="menu" /> :<img src={open} onClick={() => setActive(!active)} className="menu" alt="menu"/> }
                {active && <div className="navbar-second-newbar">
                            <a onClick={() => setActive(!active)} href="#home">&lt;home&gt;</a>
                            <a onClick={() => setActive(!active)} href="#experience">&lt;experiences&gt;</a>
                            <a onClick={() => setActive(!active)} href="#skills">&lt;skills&gt;</a>
                            <a onClick={() => setActive(!active)} href="#certification">&lt;certification&gt;</a>
                            <a onClick={() => setActive(!active)} href="#projects">&lt;projects&gt;</a>
                            </div>
                }
            </div>
        </div>
    )
}