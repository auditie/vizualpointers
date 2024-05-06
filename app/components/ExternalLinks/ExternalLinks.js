import style from './externalLinks.module.scss';
import Link from 'next/link';

export default function ExternalLinks() {
    const links = [
        {href: 'https://www.gspca.org/', title: 'GSPCA', name: 'GSP Club of America'},
        {href: 'https://vcaweb.org/', title: 'VCA', name: 'Vizsla Club of America'},
        {href: 'https://www.akc.org/', title: 'AKC', name: 'American Kennel Club'},
        {href: 'https://www.ukcdogs.com/', title: 'UKC', name: 'United Kennel Club'},
        {href: 'https://northamericadivingdogs.com/', title: 'NADD ORG', name: 'North America Diving Dogs'},
        {href: 'https://www.barnhunt.com/index.html', title: 'BARNHUNT', name: 'Barn Hunt Association'},
    ]
    return (
        <div id={style.externalLinks}>
            <h2>Helpful Links</h2>
            <div className={style.linksContainer}>
                <div className={style.links}>
                    {links.map(({href, title, name}) => (
                        <Link href={href} key={title} className={style.link} target='_blank'>
                            <div className={style.linkText}>
                                <h3>{title}</h3>
                                <p>{name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}