"use client";

import React from "react";
import blogPosts from "../../data/blogposts";
import style from './blogpost.module.scss';
import Link from "next/link";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function BlogPost({ params }) {
  useEffect(() => {
    AOS.init();
}
, []);

  const post = blogPosts.find((post) => post.journalId === parseInt(params.journalId));
    return (
        <div className={style.blogPost}>
          <div 
            className={style.blogPostHero}
            style={{ backgroundImage: `url(${post.featuredImg})` }}
            data-aos='fade-up' data-aos-duration='1000'
          >
            <h1>{post.title}</h1>
          </div>
          <div className={style.blogPostContent} data-aos='fade-up' data-aos-duration='1000'>
            <p><span className={style.introText}>{post.date},</span> {post.intro}</p>
            <div className={style.content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className={style.blogGallery} data-aos='fade-up' data-aos-duration='1000'>
            {post.photos.map((photoUrl, index) => (
              <div 
                className={style.galleryPhoto} 
                key={index} 
                style={{ backgroundImage: `url(${photoUrl})` }}>
              </div>
            ))}
          </div>
          <div className={style.return} data-aos='fade-up' data-aos-duration='1000'>
            <Link href='/journal'>Return to Journal</Link>
          </div>
        </div>
      );
}