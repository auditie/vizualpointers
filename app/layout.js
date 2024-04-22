import './globals.css'
import style from './layout.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import instagramLogo from '../public/images/icons/instagram-white.png';

const inter = Inter({ subsets: ['latin'] })

import logo from '../public/images/logos/vizualpointers-logo.svg';

export const metadata = {
  title: 'vizual pointers',
  description: 'home site for vizual pointers',
}

export default function RootLayout({ children }) {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const links = [
    // {href: '/', title: 'home'},
    {href: '/about', title: 'ABOUT'},
    {href: '/journal', title: 'JOURNAL'},
    {href:'/fun', title: 'FUN'},
    {href: '/contact', title: 'CONTACT'}
  ];

  const footerLinks = [
    {href: '/about', title: 'ABOUT'},
    {href: '/journal', title: 'JOURNAL'},
    {href: '/contact', title: 'CONTACT'},
    {href:'/fun', title: 'FAVORITE PRODUCTS'},
  ]
  const footerLinks2 = [
    {href:'/fun/portfolio', title: 'PORTFOLIO'},
    {href: 'https://www.akc.org/', title: 'AKC'},
    {href: 'https://northamericadivingdogs.com/', title: 'NADD ORG'},
    {href: 'https://www.barnhunt.com/index.html', title: 'BARNHUNT'},
  ]

  return (
    <html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/nvv3qbq.css" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className={inter.className}>
        <header>
          <div id={style.header}>
                <div className={style.header__row}>
                    <div className={style.header__col}>
                        <h3>vizual pointers</h3>
                    </div>
                    <div className={style.header__col}>
                        <ul className={style.headerNav}>
                            {links.map(({ href, title}) => (
                              <li key={href}>
                                <Link href={href}>{title}</Link>
                              </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <main>{children}</main>
        <footer>
          <Container fluid className={style.footerDiv}>
            <Row className={style.topFooter}>
              <Col>
                <h5>VIZUAL POINTERS</h5>
                <div className={style.socialLinks}>
                  {/* <img src={instagramLogo} alt='instagram logo' className={style.socialIcon} /> */}
                </div>
              </Col>
              <Col>
                <Row className={style.footerColumns}>
                  <Col>
                      <ul>
                        {footerLinks.map(({href, title}) => (
                          <li key={href}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                  </Col>
                  <Col>
                      <ul>
                        {footerLinks2.map(({href, title}) => (
                          <li key={href}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={style.bottomFooter}>
              <Col className={style.footerText}><p>COPYRIGHT {getCurrentYear()} &copy; VIZUAL POINTERS</p></Col>
            </Row>
          </Container>
        </footer>
      </body>
    </html>
  )
}
