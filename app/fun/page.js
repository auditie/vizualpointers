"use client";

import React from 'react';
import style from './fun.module.scss';
import LinkBanner from '../components/LinkBanner/LinkBanner';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import { Tabs } from 'react-bootstrap';
import { useState } from 'react';
import PhotoBar from '../components/PhotoBar/PhotoBar';


import products from '../data/products';

export default function Fun() {
    const [key, setKey] = useState('dallas');

    const handleTabSelect = (key) => {
        setKey(key);
        console.log('Active tab:', key);
    }

    const dallasLocations = [
        {id: 1, location: 'DALLAS, TX', name: 'DALLAS DIVING DOGS', href: '', type: 'DOCK DIVING'},
        {id: 2, location: 'DALLAS, TX', name: 'WHAT A GREAT DOG!', href: '', type: 'TRAINING'},
        {id: 3, location: 'MIDLOTHIAN, TX', name: 'DALLAS AIR DOGS', href: '', type: 'FASTCAT + DOCK DIVING'},
    ]

    const austinLocations = [
        {id: 1, location: 'AUSTIN, TX', name: 'TURKEY CREEK', href: '', type: 'HIKING'},
        {id: 2, location: 'AUSTIN, TX', name: 'WALNUT CREEK', href: '', type: 'HIKING'},
    ]

    const northernUtahLocations = [
        {id: 1, location: 'PARK CITY, UT', name: 'RUN-A-MUCK', href: '', type: 'HIKING'},
        {id: 2, location: 'SALT LAKE CITY, UT', name: 'DOG MODE', href: '', type: 'DOCK DIVING'},
        {id: 3, location: 'SALT LAKE CITY, UT', name: 'TANNER DOG PARK', href: '', type: 'HIKING'},
    ]

    return (
        <div id={style.funPage}>
            <div className={style.funHero}></div>
            <LinkBanner />
            <div className={style.favoriteProducts}>
                <h2>FAVORITE PRODUCTS</h2>
                <div className={style.productsContainer}>
                    <div className={style.products}>
                        {products.map((product) => (
                            <div className={style.product} key={product.name}>
                                {/* <div className={style.productImage} style={{backgroundImage: `url(${product.img})`}}></div> */}
                                <p>{product.name}</p>
                                <a href={product.href} target="_blank">LINK</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <PhotoBar />
            <div className={style.favoriteSpots}>
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
                                    <p>{location.location}</p>
                                    <p>{location.name}</p>
                                    <p>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="austin" title="AUSTIN" className={style.tab}>
                        <div className={style.locationContainer}>
                            {austinLocations.map((location) => (
                                <div className={style.location} key={location.id}>
                                    <p>{location.location}</p>
                                    <p>{location.name}</p>
                                    <p>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                    <Tab eventKey="northern-utah" title="NORTHERN UTAH" className={style.tab}>
                        <div className={style.locationContainer}>
                            {northernUtahLocations.map((location) => (
                                <div className={style.location} key={location.id}>
                                    <p>{location.location}</p>
                                    <p>{location.name}</p>
                                    <p>{location.type}</p>
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}