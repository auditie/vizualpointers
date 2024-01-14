import style from './contactus.module.scss';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ThickHero from '@/app/components/ThickHero/ThickHero';

export default function ContactUs() {
    return (
        <div id={style.contactUs}>
            <ThickHero />
            
            <h1>Contact us</h1>
        </div>
    )
}