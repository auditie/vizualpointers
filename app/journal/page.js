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

    const sortedPosts = blogPosts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });


    return (
        <div id={style.blogPage}>
            <div className={style.blogHero} data-aos='fade-up' data-aos-duration='1000'>
                <h1>JOURNAL</h1>
            </div>
            <div className={style.blogIntro} data-aos='fade-up' data-aos-duration='1000'>
                <p>
                    {/* <span className={style.introText}>THE JOURNAL, </span>  */}
                    I'm no writer but I love documenting events and memories with the pups. I'm hoping this can be a space to share our travels, events, tips, tricks, and more. Social media is so limited on how much you can share. So hopefully you can get to know more about us and follow our pups and their journey closer! 
                </p>
            </div>
            <div id={style.blogPosts} data-aos='fade-up' data-aos-duration='1000'>
                {sortedPosts.map((post, index) => {
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
