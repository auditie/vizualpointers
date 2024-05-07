"use client";

import style from './about.module.scss';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutPage = () => {
    useEffect(() => {
        AOS.init();
    }
    , []);

    const peachAkcTitles = [
        {title: 'TRICK DOG NOVICE - TKN', date: 'WIP'},
        {title: 'TRICK DOG INTERMEDIATE - TKI', date: 'WIP'},
        {title: 'DOCK SENIOR - DS', date: '3/5 LEGS'},
        {title: 'DOCK MASTER - DM', date: '2/5 LEGS'},
        {title: 'FASTCAT - BCAT', date: 'WIP'},
    ]

    const billyAkcTitles = [
        {title: 'CHAMPION - CH', date: 'WIP'},
        {title: 'TRICK DOG NOVICE - TKN', date: 'WIP'},
        {title: 'CANINE GOOD CITIZEN - CGC', date: 'WIP'},
        {title: 'VIRTUAL HOME MANNERS PUPPY - VHMP', date: 'WIP'},
        {title: 'VIRTUAL HOME MANNERS - VHMA', date: 'WIP'},
    ]

    const galleryImgs = [
        {src: './images/about-gallery/DSC00001.jpg'},
        {src: './images/about-gallery/DSC00801.jpg'},
        {src: './images/about-gallery/DSC01433.png'},
        {src: './images/about-gallery/DSC01036.jpg'},
        {src: './images/about-gallery/DSC01082.jpg'},
        {src: './images/about-gallery/DSC01385.jpg'},
        {src: './images/about-gallery/DSC01422.jpg'},
        {src: './images/about-gallery/DSC01589.jpg'},
        {src: './images/about-gallery/DSC00981.jpg'},
        {src: './images/about-gallery/DSC01677.jpg'},
        {src: './images/about-gallery/DSC01686.jpg'},
        {src: './images/about-gallery/DSC09974.jpg'},
        {src: './images/about-gallery/DSC09863.jpg'},
    ];

    return (
        <div id={style.aboutPage}>
            <div className={style.aboutHero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>ABOUT US</h1>
            </div>
            <div className={style.aboutIntro} data-aos='fade-up' data-aos-duration='1000'>
                <div>
                    <div>
                        <p>
                            <span className={style.introText}>VIZUAL POINTERS, </span>is my way of documenting our life with our two dogs, Peach and Billy. We are a small family of 4. We love to travel, train, and compete with our dogs. We are located in Dallas, TX and love to explore the city and surrounding areas with our dogs.
                            <br /> <br />
                            Me and my husband are both originally from Northern Utah. We moved to Texas for the summer of 2021 and fell in love with state. That Fall we decided to get our first dog, Peach! We had friends with Vizslas and knew we loved the breed and wanted to get one of our own. After 1 1/2 with Miss Peach we decided to get another dog, and we knew we needed a dog that could keep up with her drive and energy. Then in September of 2023 Billy joined our family!
                            <br /> <br />
                            We enjoy hiking, running, and dog sports. We are always looking for new things to try with our dogs and love to share the journey!
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.peachProfile} data-aos='fade-up' data-aos-duration='1000'>
                <div className={style.dogRow}>
                    <div className={style.peachLeft}>
                        <p className={style.aboutText}>
                            <span className={style.introText}>MISS SWEET PEACH, </span>
                            is a 2 year old Vizsla. She was born November 2, 2021 in Rockport, TX. Peach was a wild puppy, and we learned what it’s really like to have a high energy dog. Thanks to Peach we found our love for dog sports. We’ve tried agility, dock diving, barnhunt, and now fastCAT! 
                            <br /> <br />
                            Peach has a really high working drive, she loves to train, and loves to be as close to as as possible on the couch. She also has a spicy personality and is so fun to be around!
                        </p>
                        <div className={style.peachTitles} data-aos="fade-right" data-aos-duration='1000'>
                            <h3 className={style.akcHeader}>AKC TITLES</h3>
                            {peachAkcTitles.map((title, index) => (
                                <div className={style.akcTitle} key={index}>
                                    <h4>{title.title}</h4>
                                    <p>{title.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.peachRight}>
                        <div className={style.peachImage}></div>
                    </div>
                </div>
            </div>
            <div className={style.billyProfile} data-aos='fade-up' data-aos-duration='1000'>
                <div className={style.dogRow}>
                    <div className={style.billyLeft}>
                        <div className={style.billyImage}></div>
                    </div>
                    <div className={style.billyRight}>
                        <p className={style.aboutText}>
                            <span className={style.introText}>RHINESTONE COWBOY, </span>
                            is our German Shorthair Pointer, Billy. He is still a puppy and was born July 2, 2023 in Longview, TX. This pup is the biggest lovebug ever, he is super sweet and just wants to hang out with you all day.
                            <br /> <br />
                            He has a love for fetch, training, and wrestling with his sister Peach.
                        </p>
                        <div className={style.billyTitles} data-aos='fade-left' data-aos-duration='1000'>
                            <h3 className={style.akcHeader}>AKC TITLES</h3>
                                {billyAkcTitles.map((title, index) => (
                                    <div className={style.akcTitle} key={index}>
                                        <h4>{title.title}</h4>
                                        <p>{title.date}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <section className={style.gallery} data-aos='fade-up' data-aos-duration='1000'>
                <div className={style.container}>
                    {galleryImgs.map((img, index) => (
                        <div className={style.galleryImg} key={index} style={{ backgroundImage: `url(${img.src})` }}></div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default AboutPage