import styles from './page.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Col, 
  Row
} from 'react-bootstrap';

import HomeHero from './components/HomeHero/HomeHero';
import VideoLoop from './components/VideoLoop/VideoLoop';
import PhotoBar from './components/PhotoBar/PhotoBar';
import LinkBanner from './components/LinkBanner/LinkBanner';

export default function Home() {
  const links = [
    {href: '/journal', title: 'RECENT POST'},
    {href: '/journal', title: 'RECENT POST'},
    {href: '/journal', title: 'RECENT POST'},
  ];

  return (
    <div id={styles.homePage}>
      <HomeHero />
        <div id={styles.intro}>
          <p><span className={styles.welcome}>WELCOME, </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        </div>
        <div>
            <div id={styles.recentPosts}>
              <h2>RECENT JOURNALS</h2>
              <div className={styles.postList}>
                <div className={styles.post}>
                  <p>01</p>
                  <h3>JOURNAL TITLE</h3>
                  <p>MAY 1, 2024</p>
                </div>
                <div className={styles.post}>
                  <p>02</p>
                  <h3>JOURNAL TITLE</h3>
                  <p>MAY 1, 2024</p>
                </div>
                <div className={styles.post}>
                  <p>03</p>
                  <h3>JOURNAL TITLE</h3>
                  <p>MAY 1, 2024</p>
                </div>
              </div>
            </div>
        </div>
        <VideoLoop />
        <LinkBanner />
        <div fluid id={styles.profileHighlight}>
          <div className={styles.profileRow}>
            <div md={6} className={styles.leftCol}>
              <div className={styles.profileAbout}>
                <h2>PROFILE HIGHLIGHT</h2>
                <p>
                <span className={styles.blueText}>BLUE & LASKA,</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

                Vulputate ut pharetra sit amet aliquam id. Duis ut diam quam nulla porttitor massa. Nam at lectus urna duis convallis convallis tellus id interdum. Eget lorem dolor sed viverra ipsum nunc aliquet. 
                </p>
                <div className={styles.profileSocials}>

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
