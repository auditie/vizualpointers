import './globals.css'
import style from './layout.module.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

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
    {href: '/about', title: 'about'},
    {href: '/blog', title: 'blog'},
    {href:'/other', title: 'other'}
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Container id={style.header}>
                <Row className={style.header__row}>
                    <Col className={style.header__col}>
                        <h3>vizual pointers</h3>
                        {/* <img src={logo} id={style.logo} /> */}
                    </Col>
                    <Col className={style.header__col}>
                        <ul className={style.headerNav}>
                            {links.map(({ href, title}) => (
                              <li key={href}>
                                <Link href={href}>{title}</Link>
                              </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
        <main>{children}</main>
        <footer>
          <Container fluid className={style.footerDiv}>
            <Row >
              <Col className={style.footerText}><p>Copyright {getCurrentYear()} &copy; Vizual Pointers</p></Col>
            </Row>
          </Container>
        </footer>
      </body>
    </html>
  )
}
