import style from './other.module.scss';
import Link from 'next/link';

import MediumHero from '../components/ThickHero/ThickHero';

export default function otherPage() {
    const links = [
        {href: '/other/favorite-products', label: 'favorite products'},
        {href: '/other/portfolio', label: 'portfolio'},
        {href: '/other/contact-us', label: 'contact us'},
        {href: '/other/conformation', label: 'conformation'},
        {href: '/other/', label: 'dock diving'},
        {href: '/other/', label: 'barn hunt'},
    ]
    return (
        <div id={style.otherPage}>
            <MediumHero />
            <div id={style.pageLinks}>
                <ul>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}