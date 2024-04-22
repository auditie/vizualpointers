import style from './blog.module.scss';

// import blogPosts from '../data/blogposts';

import {
    Container,
    Col,
    Row
} from 'react-bootstrap';

export default function BlogPage() {
    const blogPosts = [
        {
            title: 'designing/building the site',
            date: 'november __, 2023',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'launching the site',
            date: 'march 13, 2024',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            title: 'fort worth show',
            date: 'march 24, 2024',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ];
    // create an empty array with state for the 6 most recent blog posts

    //create a function that calls from the db 
        // GET request
            // store response in a variable
            // set the array of blogs state to 6 most recent blogs
        // handle error

    // useEffect
        // run functions when page loads    

    // const journalPosts = blogPosts;
    // console.log(blogPosts)

    return (
        <div id={style.blogPage}>
            <div className={style.blogHero}>
                <h1>JOURNAL</h1>
            </div>
            <div className={style.blogIntro}>
                <p>
                    <span className={style.introText}>THE JOURNAL, </span>
                    to Vizual Pointers! We’re two pups living in Dallas, TX living with our two loving pawrents. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>
            <div id={style.blogPosts}>
                {blogPosts.map((post, index) => {
                    <div className={style.post}>
                        <h3>{post.title}</h3>
                        <p>{post.date}</p>
                    </div>
                })}
            </div>
        </div>
    )
}
