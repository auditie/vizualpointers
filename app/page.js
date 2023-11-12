import styles from './page.module.scss'

import {
  Container,
  Col, 
  Row
} from 'react-bootstrap';

import HomeHero from './components/HomeHero/HomeHero';
import BlockLinks from './components/BlockLinks/BlockLinks';

export default function Home() {
  const links = [
    {href: '/about', title: 'about'},
    {href: '/blog', title: 'blog'},
    {href: '/fun', title: 'fun'}
  ];

  return (
    <div id={styles.homePage}>
      <HomeHero />
      <div className={styles.welcomeContainer}>
        <h1>welcome</h1> <div className={styles.lineBreak} />
      </div>
        <div id={styles.intro}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div className={styles.logoIntro}></div>
        </div>
      <div id={styles.pageLinks}>
        {links.map((link) => (
          <BlockLinks key={link.href} link={link} />
        ))}
      </div>
    </div>
  )
}
