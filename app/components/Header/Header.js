import style from './Header.module.scss';

import {
    Container,
    Col,
    Row
} from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Container id={style.header}>
                <Row className={style.header__row}>
                    <Col className={style.header__col}>
                        <h3>Vizual Pointers</h3>
                    </Col>
                    <Col className={style.header__col}>
                        <ul className={style.headerNav}>
                            <li className={style.headerNav__link}>About</li>
                            <li className={style.headerNav__link}>Blog</li>
                            <li className={style.headerNav__link}>Fun</li>
                            <li className={style.headerNav__link}>Contact</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}