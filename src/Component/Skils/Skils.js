import React from 'react';
import './Skils.css' 
import uiDesign from '../../assets/ui-design.png' 
import webDesign from '../../assets/website-design.png' 
import appDesign from '../../assets/app-design.png'

const Skils = () => {
    return (
        <div>
            <section id="skils">
                <span className="skillTitle">What i do</span>
                <span className="skillDesc">I'm a passionate web developer with a keen eye for design and a strong foundation in coding. With expertise in HTML, CSS, JavaScript, and popular frameworks, I create visually appealing and user-friendly websites that drive results. I'm dedicated to staying up-to-date with the latest web technologies and trends to deliver innovative solutions for my clients. Let's work together to build something exceptional.</span> 
                <div className="skillBars">
                    <div className="skillBar">
                        <img src={uiDesign} alt="uiDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>This is a demo text, it can change.</p>
                        </div>
                    </div>


                    <div className="skillBar">
                        <img src={webDesign} alt="webDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>Web Development</h2>
                            <p>This is a demo text, it can change.</p>
                        </div>
                    </div>


                    <div className="skillBar">
                        <img src={appDesign} alt="appDesign" className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>App Development</h2>
                            <p>This is a demo text, it can change.</p>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Skils;