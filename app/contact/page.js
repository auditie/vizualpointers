"use client";

import style from './Contact.module.scss';
import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {
    useEffect(() => {
        AOS.init();
    }
    , []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const [isCapchaValid, setIsCapchaValid] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs
            .sendForm(
                process.env.SERVICE_ID,
                process.env.EMAILJS_TEMPLATE_ID ,
                e.target,
                process.env.USER_ID
            )
            .then(
                (result) => {
                    setStateMessage('Message sent successfully!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                },
                (error) => {
                    setStateMessage('Failed to send message. Please try again later.');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000);
                }
            );
        e.target.reset();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setIsCapchaValid(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if(!isValidEmail(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        // hanlde form submission
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div id={style.contactPage}>
            <div className={style.contactHero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>CONTACT US</h1>
            </div>
            <div className={style.contactForm} data-aos='fade-up' data-aos-duration='1000'>
                <form className={style.form} onSubmit={sendEmail}>
                    <input 
                        type="text" 
                        id="to_name" 
                        name="to_name" 
                        placeholder='NAME' 
                        required 
                    />
                    <input 
                        type="email"
                        id="from_name" 
                        name="from_name" 
                        placeholder='EMAIL' 
                        required
                    />
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder='MESSAGE' 
                        required 
                    />
                    {/* <ReCAPTCHA
                        sitekey="process.env.REACT_APP_RECAPTCHA_SITE_KEY"
                        onChange={handleCaptchaChange}
                    /> */}
                    <button type="submit" value="Send" disabled={isSubmitting}>Submit</button>
                    {stateMessage && <p>{stateMessage}</p>}
                </form>
            </div>
        </div>
    )
}