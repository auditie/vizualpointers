import style from './blog.module.scss';

import SlimHero from '../components/SlimHero/SlimHero';
import BlogLink from '../components/BlogLink/BlogLink';

export default function BlogPage() {
    // create an empty array with state for the 6 most recent blog posts

    //create a function that calls from the db 
        // GET request
            // store response in a variable
            // set the array of blogs state to 6 most recent blogs
        // handle error

    // useEffect
        // run functions when page loads    

    return (
        <div id={style.blogPage}>
            <div>
                <SlimHero />
            </div>
            <div>
                <h1>blog</h1>
                <div id={style.blogGrid}>
                    <BlogLink />
                    <BlogLink />
                    <BlogLink />
                    <BlogLink />
                    <BlogLink />
                    <BlogLink />
                </div>
                <div id={style.moreBlogs}>
                    <button className={style.loadMore}>
                        load more
                    </button>
                </div>
            </div>
        </div>
    )
}
