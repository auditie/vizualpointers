import style from './BlogLink.module.scss'
import Link from 'next/link'

export default function BlogLink({ blog }) {
    return(
        <div className={style.blogLink}>
            <Link href='/'>
                <h3>title of blog</h3>
                <h4>day month, year</h4>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <div className={style.blogLink__img} />
            </Link>
        </div>
    )
}