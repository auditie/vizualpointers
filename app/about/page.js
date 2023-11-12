import style from './about.module.scss';

const AboutPage = () => {
    return (
        <div id={style.aboutPage}>
            <div id={style.aboutIntro}>
                <div id={style.aboutImg} />
                <div id={style.aboutText}>
                    <h1>about us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
            <div id={style.highlightSection}>
                <div className={style.bannerImg} />
                <div id={style.splitAbout}>
                    <div id={style.peach}>
                        <h2>Peach</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className={style.peachPhoto} />
                    </div>
                    <div id={style.billy}>
                        <h2>Billy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className={style.billyPhoto} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage