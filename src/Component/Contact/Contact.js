import React, { useRef } from 'react';
import './Contact.css' 
import fbImg from '../../assets/facebook.png' 
import adobeImg from '../../assets/adobe.png' 
import microsoftImg from '../../assets/microsoft.png' 
import walmartImg from '../../assets/walmart.png'
import fbIcon from '../../assets/facebook-icon.png' 
import twitterIcon from '../../assets/twitter.png' 
import youtubeIcon from '../../assets/youtube.png'
import instagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ql6xeht', 'template_hw1m504', form.current, {
            publicKey: 'Kk4DK3fDa6vuGL_JY',
          })
          .then(
                () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email send !');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );
        };
    
    return (
        <section id="contactPage">
            <div id="clients">
                <h2 className="clientPageTitle">My clients</h2>
                <p className="clientPageDesc">Our clients are a diverse group of businesses and individuals seeking professional, visually appealing websites to enhance their online presence. From small startups to established corporations.</p>
                <div className="companyImgs">
                    <img src={fbImg} alt="" className="companyImg" />
                    <img src={adobeImg} alt="" className="companyImg" />
                    <img src={microsoftImg} alt="" className="companyImg" />
                    <img src={walmartImg} alt="" className="companyImg" />
                </div>
            </div>

            <div id="contact">
                <h2 className="clientPageTitle">Contact me</h2> 
                <p className="contactPageDesc">Please fill out the form below to discuss any work</p> 
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name'/> 
                    <input type="email" className="email" placeholder='Your email' name='from_email'/> 
                    <textarea name="message" rows="5" className="msg" placeholder='Your message'></textarea> 
                    <button type='submit' value='send' className="submitBtn">Submit</button>

                    <div className="links">
                        <img src={fbIcon} alt="fbIcon" className="link" />
                        <img src={youtubeIcon} alt="youtubeIcon" className="link" />
                        <img src={instagramIcon} alt="instagramIcon" className="link" />
                        <img src={twitterIcon} alt="twitter" className="link" />
                    </div>
                </form> 
            </div>
        </section>
    );
};

export default Contact;