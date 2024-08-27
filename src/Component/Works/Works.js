import React from 'react';
import './Works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
    return (
            <section id="works">
                <h2 className="workTitle">My Portfolio</h2>
                <p className="workDesc">Experienced web developer specializing in creating responsive, user-friendly websites. Proficient in HTML, CSS, JavaScript, and popular frameworks. Passionate about delivering high-quality solutions that meet client needs and exceed expectations.</p>

                <div className="workImages">
                    <img src={portfolio1} alt="" className="workImg" />
                    <img src={portfolio2} alt="" className="workImg" />
                    <img src={portfolio3} alt="" className="workImg" />
                    <img src={portfolio4} alt="" className="workImg" />
                    <img src={portfolio5} alt="" className="workImg" />
                    <img src={portfolio6} alt="" className="workImg" />
                </div>
                <button className="workBtn">See more</button>
            </section>
    );
};

export default Works;