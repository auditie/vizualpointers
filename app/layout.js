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
  title: 'VIZUAL POINTERS',
  description: 'HOME OF VIZUAL POINTERS',
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
    // {href: '/contact', title: 'CONTACT'}
  ];

  const footerLinks = [
    {href: '/about', title: 'ABOUT'},
    {href: '/journal', title: 'JOURNAL'},
    // {href: '/contact', title: 'CONTACT'},
    {href:'/fun', title: 'FAVORITES'},
    {href:'/fun', title: 'PORTFOLIO'},
  ]
  const footerLinks2 = [
    {href: 'https://northamericadivingdogs.com/', title: 'NADD ORG'},
    {href: 'https://www.barnhunt.com/index.html', title: 'BARNHUNT'},
    {href: 'https://www.akc.org/', title: 'AKC'},
    {href: 'https://www.ukcdogs.com/', title: 'UKC'},
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
                        <h3><Link href='/'>vizual pointers</Link></h3>
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
        <main className={style.body}>{children}</main>
        <footer>
          <div className={style.footerDiv}>
            <div className={style.topFooter}>
              <div>
                <Link href="/" className={style.homeLink}>VIZUAL POINTERS</Link>
                <div className={style.socialLinks}>
                  <Link href="https://www.instagram.com/vizualpointers/" className={style.instagramLogo} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <div className={style.footerColumns}>
                  <div>
                      <ul>
                        {footerLinks.map(({href, title}) => (
                          <li key={href}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                  </div>
                  <div>
                      <ul>
                        {footerLinks2.map(({href, title}) => (
                          <li key={href}>
                            <Link href={href}>{title}</Link>
                          </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.bottomFooter}>
              <div className={style.footerText}><p>{getCurrentYear()} &copy; VIZUAL POINTERS</p></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
