"use client";

import styles from './page.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';

import HomeHero from './components/HomeHero/HomeHero';
import VideoLoop from './components/VideoLoop/VideoLoop';
import PhotoBar from './components/PhotoBar/PhotoBar';
import LinkBanner from './components/LinkBanner/LinkBanner';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import blogPosts from './data/blogposts';

export default function Home() {
  useEffect(() => {
    AOS.init();
}
, []);

  const links = [
    {href: '/journal', title: 'RECENT POST'},
    {href: '/journal', title: 'RECENT POST'},
    {href: '/journal', title: 'RECENT POST'},
  ];

  const sortedPosts = blogPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  const recentPosts = sortedPosts.slice(0, 3);

  return (
    <div id={styles.homePage}>
      <HomeHero />
        {/* <div id={styles.intro} data-aos='fade-up' data-aos-duration='1000'>
          <p className={styles.introduction}><span className={styles.welcome}>WELCOME, </span>This is our little corner of the internet to share more about our pups and their adventures!</p>
        </div> */}
        <div>
          <div id={styles.recentPosts} data-aos='fade-up' data-aos-duration='1000'>
            <h2>RECENT JOURNALS</h2>
            <div className={styles.postList}>
              {recentPosts.map((post, index) => (
                  <Link href={`/journal/${post.journalId}`} passHref className={styles.postLink} key={post.journalId}>
                    <div key={post.journalId} className={styles.post}>
                      <p className={styles.number}>0{post.journalId}</p>
                      <h3 className={styles.title}>{post.title.toUpperCase()}</h3>
                      <p className={styles.date}>{post.date.toUpperCase()}</p>
                    </div> 
                  </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.photoBar} data-aos='fade-up' data-aos-duration='1000'></div>
        <div data-aos='fade-up' data-aos-duration='1000'>
          <LinkBanner />
        </div>
        <div id={styles.profileHighlight} data-aos='fade-up' data-aos-duration='1000'>
          <div className={styles.profileRow}>
            <div md={6} className={styles.leftCol}>
              <div className={styles.profileAbout}>
                <h2>PROFILE HIGHLIGHT</h2>
                <p>
                <span className={styles.blueText}>BLUE & LASKA,</span> Are some of the most adventurous pups I&apos;ve ever seen! We&apos;ve been following them for awhile and I just love their content. Blue is a GSP-Malamute + mix and Laska is a great Pyrenees. They live in Utah and are avid travelers.<br /><br />
                I asked their owner, Julia, what her favorite thing is about each of her dogs is:<br/><br/> 
                <span className={styles.ownerQuote}>Blue - &quot;I love that he loves being wherever we are. We can be anywhere and he is just happy to be a part of everything we do! The way he looks at me for guidance is very special to me because it hsows how much our relationship has grown. He is the dog that got me into training!&quot;</span><br /><br />
                <span className={styles.ownerQuote}>Laska - &quot;I love how patient and gentle she is. She has never growled or snapped at us even during uncomfortable moments like getting her nails trimmed and getting bathed. She isn&apos;t a velcro dog, but she is the one that wouldn&apos;t leave my side when I got home the few times I&apos;ve had to go out of town without her. She gives the best cuddles and just wants to be pet and hugged all the time!&quot;</span><br /><br /> 
                I also have to highlight the fact that they have absolutely beautiful photos on their account! I love the composition and color in their photos! Blue and Laska also have the best hug pose! Can&apos;t recommend following their journey enough!
                </p>
                <div className={styles.profileSocials}>
                  <Link href="https://www.instagram.com/blueandlaska/" target="_blank" className={styles.instagramLogo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg> blueandlaska
                  </Link>
                </div>
              </div>
            </div>
            <div md={6} className={styles.rightCol}>
              <div className={styles.profileImgOne}></div>
            </div> 
          </div>
          <div className={styles.profileRowTwo}>
            <div xs={6} className={styles.leftCol}>
              <div className={styles.profileImgTwo}></div>
            </div>
            <div xs={6} className={styles.rightCol}>
              <div className={styles.profileImgThree}></div>
            </div>
          </div>
        </div>
    </div>
  )
}
