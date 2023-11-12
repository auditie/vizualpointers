import style from './BlogLink.module.scss'
import Link from 'next/link'

export default function BlogLink({ blog }) {
    return(
        <div className={style.blogLink}>
            <Link href='/'>
                <h3>month day, year</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <div className={style.blogLink__img} />
            </Link>
        </div>
    )
}