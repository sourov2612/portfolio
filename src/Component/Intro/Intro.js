import React from 'react'; 
import './Intro.css' 
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span> 
                <span className="introText">I am <span className="introName">Sourov</span> <br />Website designer</span>
                <p className="introPara">I am a skilled and passionate web designer with experience in creating <br /> visually appealing and user-friendly website</p>
                <Link><button className="btn"><img src={btnImg} alt="hire me" className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    );
};

export default Intro;