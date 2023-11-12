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
                        <h3>vizual pointers</h3>
                    </Col>
                    <Col className={style.header__col}>
                        <ul className={style.headerNav}>
                            <li className={style.headerNav__link}>about</li>
                            <li className={style.headerNav__link}>blog</li>
                            <li className={style.headerNav__link}>fun</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}