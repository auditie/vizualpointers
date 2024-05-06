"use client";

import React from 'react';
import style from './fun.module.scss';
import LinkBanner from '../components/LinkBanner/LinkBanner';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import { Tabs } from 'react-bootstrap';
import { useState } from 'react';
import PhotoBar from '../components/PhotoBar/PhotoBar';
import { useEffect } from 'react';
import Products from '../components/Products/Products';
import ExternalLinks from '../components/ExternalLinks/ExternalLinks';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Fun() {
    useEffect(() => {
        AOS.init();
    }
    , []);

    const [key, setKey] = useState('dallas');

    const handleTabSelect = (key) => {
        setKey(key);
        console.log('Active tab:', key);
    }

    const dallasLocations = [
        {id: 1, location: 'DALLAS, TX', name: 'DALLAS DIVING DOGS', href: '', type: 'DOCK DIVING'},
        {id: 2, location: 'DALLAS, TX', name: 'WHAT A GREAT DOG!', href: '', type: 'TRAINING'},
        {id: 3, location: 'MIDLOTHIAN, TX', name: 'DALLAS AIR DOGS', href: '', type: 'FASTCAT/DOCK DIVING'},
    ]

    const austinLocations = [
        {id: 1, location: 'AUSTIN, TX', name: 'TURKEY CREEK', href: '', type: 'HIKING'},
        {id: 2, location: 'AUSTIN, TX', name: 'WALNUT CREEK', href: '', type: 'HIKING'},
        {id: 3, location: 'AUSTIN, TX', name: 'ONION CREEK', href: '', type: 'HIKING'}
    ]

    const northernUtahLocations = [
        {id: 1, location: 'PARK CITY, UT', name: 'RUN-A-MUCK', href: '', type: 'HIKING'},
        {id: 2, location: 'SALT LAKE CITY, UT', name: 'DOG MODE', href: '', type: 'DOCK DIVING'},
        {id: 3, location: 'SALT LAKE CITY, UT', name: 'TANNER DOG PARK', href: '', type: 'HIKING'},
        {id: 4, location: 'ASPEN GROVE, UT', name: 'STEWART FALLS', href: '', type: 'HIKING'},
    ]

    return (
        <div id={style.funPage}>
            <div className={style.funHero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>FUN & <br />FAVORITES</h1>
            </div>
            <div className={style.funIntro} data-aos='fade-up' data-aos-duration='1000'>
                <p>
                    <span className={style.introText}>WELCOME, </span>
                    to our fun page! Here you will find our favorite products, spots, and more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>
            <div className={style.favoriteSpots} data-aos='fade-up' data-aos-duration='1000'>
                <h2>FAVORITE SPOTS</h2>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={handleTabSelect}
                    className={style.locationTabs}
                >   
                    <Tab eventKey="dallas" title="DALLAS" className={style.tab}>
                        <div className={style.locationContainer}>
                            {dallasLocations.map((location) => (
                                <div className={style.location} key={location.id}>
                                    <p className={style.city}>{location.location}</p>
                                    <p className={style.place}>{location.name}</p>
                                    <p className={style.type}>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="austin" title="AUSTIN" className={style.tab}>
                        <div className={style.locationContainer}>
                            {austinLocations.map((location) => (
                                <div className={style.location} key={location.id}>
                                    <p className={style.city}>{location.location}</p>
                                    <p className={style.place}>{location.name}</p>
                                    <p className={style.type}>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="northern-utah" title="NORTHERN UTAH" className={style.tab}>
                        <div className={style.locationContainer}>
                            {northernUtahLocations.map((location) => (
                                <div className={style.location} key={location.id}>
                                    <p className={style.city}>{location.location}</p>
                                    <p className={style.place}>{location.name}</p>
                                    <p className={style.type}>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <PhotoBar />
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <Products />
            </div>
            <div data-aos='fade-up' data-aos-duration='1000'>
                <ExternalLinks />
            </div>
            <div id={style.portfolioPreview} data-aos='fade-up' data-aos-duration='1000'>
                <div className={style.portfolioText}>
                    <h4>PHOTOGRAPHY<br />PORTFOLIO</h4>
                    <p>Coming Soon</p>
                </div>
            </div>
        </div>
    )
}