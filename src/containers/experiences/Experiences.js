import React from "react";
import './experiences.css';
export default function Experiences(props) {
    return (
        <div className="experiences-screen">
            <div id="experience" className="experiences-exp">
                <p className="yellow">&lt;experiences&gt;</p>
                <div className="exp">
                    <div className="exp-top">
                        <h1 className="yellow">SDE Intern</h1>
                        <p>(Present)</p>
                    </div>
                    <p>Waterdip AI, Bangalore, India</p>
                    <div className="exp-bottom">
                        <p>Building scalable websites, with fresh front-end technologies - React Js, Bootstrap.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-top">
                        <h1 className="yellow">IT Intern</h1>
                        <p>(2022 AUG)</p>
                    </div>
                    
                    <p>Integral Coach Factory, Chennai, India</p>
                    
                    <div className="exp-bottom">
                        <p>Gained experience in handling the factory's HR, Materials Management, and Planning.</p>
                    </div>
                </div>
                <div className="exp">
                    <div className="exp-top">
                        <h1 className="yellow">Web/App Developer</h1>
                        <p>(2022 MAY)</p>
                    </div>
                    <p>The Sparks Foundation, Singapore</p>
                    <div className="exp-bottom">
                        <p>Made collaborations with peers globally during the intern to make quality cross-platform apps.</p>
                    </div>
                   
                </div>
                <p className="yellow">&lt;/experiences&gt;</p>
            </div>
            <div id="skills" className="experiences-skiller">
                <div className="skiller-skills">
                    <p className="yellow">&lt;skills&gt;</p>
                    <div className="skill">
                        <p>React Js</p>
                        <div className="skill-cont">
                            <div className="react"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <p>Flutter</p>
                        <div className="skill-cont">
                            <div className="flutter"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <p>Figma</p>
                        <div className="skill-cont">
                            <div className="figma"></div>
                        </div>
                    </div>
                    <div className="skill">
                        <p>Python/ML</p>
                        <div className="skill-cont">
                            <div className="python"></div>
                        </div>
                    </div>
                    <p className="yellow">&lt;/skills&gt;</p>
                </div>
                <div id="certification" className="skiller-certification">
                    <p className="yellow">&lt;certification&gt;</p>
                    <div className="certification">
                        <h1 className="yellow">CS50P - Harvard</h1>
                        <p>Solved over 9 Problem sets, and completed a final project.</p>
                    </div>
                    <div className="certification">
                        <h1 className="yellow">fCC - Front-end Libraries</h1>
                        <p>Completed 3 certifications from freeCodeCamp covering for over 900 hours of coursework.</p>
                    </div>
                    <div className="certification">
                        <h1 className="yellow">Hackerrank - Java, Python</h1>
                        <p>Hackerrank certified for Java(Basic) and Python(Basic), and problem solving.</p>
                    </div>
                    <p className="yellow">&lt;/certification&gt;</p>
                    
                </div>
            </div>
            <div class="custom-shape-divider-top-1669623932">
                {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg> */}
            </div>
        </div>
    )
}