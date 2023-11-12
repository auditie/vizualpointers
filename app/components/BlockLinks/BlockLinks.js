import style from './BlockLinks.module.scss'
import Link from 'next/link'

export default function BlockLinks({ link }) {
    return (
        <div className={style.blockLink}>
            <Link href={link.href}>
                <h2 className={style.blockLink__title}>{link.title}</h2>
                <div className={style.blockLink__img} />
            </Link>
        </div>
    )
}