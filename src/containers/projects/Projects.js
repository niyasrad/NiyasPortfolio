import React from "react";
import './projects.css';
import neu from '../../assets/neucalc.svg';
import navi from '../../assets/navi.svg';
import dj from '../../assets/djmax.svg';
import yasume from '../../assets/yasume.svg';
import hotdash from '../../assets/hotdash.svg';
import radkulch from '../../assets/radkulch.svg';


export default function Projects(props) {
    return (
        <div id="projects" className="projects-screen">
            <div className="projects">
                <p className="yellow">&lt;projects&gt;</p>
                <div className="projects-first">
                    <a href="https://neu-calc.vercel.app/" target="_blank">
                    <div className="first-card">
                        <img src={neu} alt=""></img>
                        <div className="card-back"></div>
                    </div>
                    </a>
                    <a href="https://navi-neon.vercel.app/" target="_blank">
                    <div className="first-card">
                        <img src={navi} alt=""></img>
                        <div className="card-back"></div>
                    </div>  
                    </a>
                    <a href="https://djmax-product.vercel.app/" target="_blank">
                    <div className="first-card">
                        <img src={dj} alt=""></img>
                        <div className="card-back"></div>
                    </div>  
                    </a>
                    
                    
                   
                </div>
                <div className="projects-second">
                    <a href="https://yasume.vercel.app/" target="_blank">
                    <div className="second-card">
                        <img src={yasume} alt=""></img>
                        <div className="card-back"></div>
                    </div>
                    </a>
                    <a href="https://hot-dash.vercel.app/" target="_blank">
                    <div className="second-card">
                        <img src={hotdash} alt=""></img>
                        <div className="card-back"></div>
                    </div>
                    </a>
                    <a href="https://rad-kulch.vercel.app/" target="_blank">
                    <div className="second-card">
                        <img src={radkulch} alt=""></img>
                        <div className="card-back"></div>
                    </div>
                    </a>
                    
                    
                    
                </div>
                <p className="yellow">&lt;/projects&gt;</p>
            </div>

        </div>
    )
}