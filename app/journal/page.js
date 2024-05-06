"use client";

import style from './blog.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';

import blogPosts from '../data/blogposts';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPage() {
        
    useEffect(() => {
        AOS.init();
    }
    , []);


    return (
        <div id={style.blogPage}>
            <div className={style.blogHero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>JOURNAL</h1>
            </div>
            <div className={style.blogIntro} data-aos='fade-up' data-aos-duration='1000'>
                <p>
                    <span className={style.introText}>THE JOURNAL, </span>
                    to Vizual Pointers! We’re two pups living in Dallas, TX living with our two loving pawrents. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>
            <div id={style.blogPosts} data-aos='fade-up' data-aos-duration='1000'>
                {blogPosts.map((post, index) => {
                    return (
                        <div className={style.post} key={post.journalId}>
                            {/* took out passHref from here, was getting a react issue */}
                            <Link href={`/journal/${post.journalId}`} passHref className={style.postLink}>
                                <p className={style.number}>0{post.journalId}</p>
                                <div className={style.content}>
                                    <h3 className={style.title}>{post.title}</h3>
                                    <p className={style.summary}>
                                        {post.summary}
                                    </p>
                                </div>
                                <p className={style.date}>{post.date}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
