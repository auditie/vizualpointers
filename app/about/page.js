import style from './about.module.scss';

const AboutPage = () => {

    const peachAkcTitles = [
        {title: 'TRICK DOG NOVICE - TKN', date: 'WIP'},
        {title: 'TRICK DOG INTERMEDIATE - TKI', date: 'WIP'},
        {title: 'DOCK SENIOR - DS', date: '3/5 LEGS'},
        {title: 'DOCK MASTER - DM', date: '2/5 LEGS'},
        {title: 'FASTCAT - BCAT', date: 'WIP'},
    ]

    const billyAkcTitles = [
        {title: 'CHAMPION - CH', date: 'WIP'},
        {title: 'TRICK DOG NOVICE - TKN', date: 'WIP'},
        {title: 'CANINE GOOD CITIZEN - CGC', date: 'WIP'},
        {title: 'VIRTUAL HOME MANNERS PUPPY - VHMP', date: 'WIP'},
        {title: 'VIRTUAL HOME MANNERS - VHMA', date: 'WIP'},
    ]

    return (
        <div id={style.aboutPage}>
            <div className={style.aboutHero}>
                <h1>ABOUT US</h1>
            </div>
            <div className={style.aboutIntro}>
                <div>
                    <div>
                        <p>
                            <span className={style.introText}>WELCOME, </span>to Vizual Pointers! We’re two pups living in Dallas, TX living with our two loving pawrents. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                    </div>
                </div>
            </div>
            <div className={style.peachProfile}>
                <div className={style.dogRow}>
                    <div className={style.peachLeft}>
                        <p className={style.aboutText}>
                            <span className={style.introText}>MISS SWEET PEACH, </span>
                            is a 2 year old Vizsla. She was born November 2, 2021 in Rockport, TX. Peach was a wild puppy, and we learned what it’s really like to have a high energy dog. Thanks to Peach we found our love for dog sports. We’ve tried agility, dock diving, barnhunt, and now fastCAT! 
                            <br /> <br />
                            Peach has a really high working drive, she loves to train, and loves to be as close to as as possible on the couch. She also has a spicy personality and is so fun to be around!
                        </p>
                        <div className={style.peachTitles}>
                            <h3 className={style.akcHeader}>AKC TITLES</h3>
                            {peachAkcTitles.map((title, index) => (
                                <div className={style.akcTitle} key={index}>
                                    <h4>{title.title}</h4>
                                    <p>{title.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={style.peachRight}>
                        <div className={style.peachImage}></div>
                    </div>
                </div>
            </div>
            <div className={style.billyProfile}>
                <div className={style.dogRow}>
                    <div className={style.billyLeft}>
                        <div className={style.billyImage}></div>
                    </div>
                    <div className={style.billyRight}>
                        <p className={style.aboutText}>
                            <span className={style.introText}>RHINESTONE COWBOY, </span>
                            is our GSP Billy. He is currently a puppy still and was born July 2, 2023 in Longview, TX. Billy is our first show dog and we’ve stepped food in the conformation world thanks to him! This dude is the biggest love bug ever, he is super sweet and just wants to hang out with you all day.
                            <br /> <br />
                            He has a love for fetch, training, and playing with his sister Peach.
                        </p>
                        <div className={style.billyTitles}>
                            <h3 className={style.akcHeader}>AKC TITLES</h3>
                                {billyAkcTitles.map((title, index) => (
                                    <div className={style.akcTitle} key={index}>
                                        <h4>{title.title}</h4>
                                        <p>{title.date}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage