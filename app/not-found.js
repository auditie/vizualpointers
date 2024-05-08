"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './styles/not-found.module.scss';

export default function NotFound() {
    useEffect(() => {
        AOS.init();
    }
    , []);
    return (
        <div id={style.notFound}>
            <div className={style.hero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>404 - Not Found</h1>
            </div>
            <div className={style.content} data-aos='fade-up' data-aos-duration='1000'>
                <p>
                    The page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}
