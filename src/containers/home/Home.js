import React from "react";
import './home.css';
import desktop from '../../assets/desktap.png';
import mobile from '../../assets/mobail.png';

export default function Home(props) {
    return (
        <div id="home" className="home-screen">
            <div className="home-first">
                <div className="straight">
                <p>&lt;developer&gt;</p>
                <h1>Niyas Hameed</h1>
                <p className="last">&lt;/developer&gt;</p>
                </div>
                
                <img className="desktop" src={desktop} alt="niyas" />
                <img className="mobile" src={mobile} alt="niyas" />
            </div>
            <div className="home-second">
                <p>&lt;about me&gt;</p>
                <p className="home-second-about">A rising web developer with passion to design and front-end development.<span className="extra"> I work on a lot of projects, I like managing and conquering, one problem at once. I'm currently aiming to become a full-stack web developer by the end of March 2023.</span></p>
                <p className="last">&lt;/about me&gt;</p>
            </div>
            {/* <div class="custom-shape-divider-bottom-1669623745">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div> */}
        </div>
    )
}