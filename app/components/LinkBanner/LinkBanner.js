import style from './LinkBanner.module.scss';
import Link from 'next/link';

import {
    Container,
    Col, 
    Row
  } from 'react-bootstrap';

export default function LinkBanner() {
    const links = [
        // {href: '/portfolio', title: 'PORTFOLIO'},
        {href: '/fun', title: 'FAVORITES'},
        {href: 'https://northamericadivingdogs.com/', title: 'NADD ORG'},
        {href: 'https://www.gspca.org/', title: 'GSPCA'},
        {href: 'https://www.akc.org/', title: 'AKC'},
        {href: 'https://vcaweb.org/', title: 'VCA'},
        {href: 'https://www.barnhunt.com/index.html', title: 'BARNHUNT'},
    ]
    return (
        <Container fluid className={style.linkBanner}>
            <Row className={style.linkRow}>
                {links.map((link, index) => (
                    <Col key={index} className={style.linkCol}>
                        <Link href={link.href} className={style.link}>
                            {link.title}
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}