import style from './Contact.module.scss';

export default function Contact() {

    return (
        <div id={style.contactPage}>
            <div className={style.contactHero}>
                <h1>CONTACT US</h1>
            </div>
            <div className={style.contactForm}>
                <form className={style.form}>
                    <input type="text" id="name" name="name" placeholder='NAME' required></input>
                    <input type="email" id="email" name="email" placeholder='EMAIL' required></input>
                    <textarea id="message" name="message" placeholder='MESSAGE' required></textarea>
                    <button type="submit">Submit</button>

                    {/* add CAPTCHA to protect from spam submissions */}
                </form>
            </div>
        </div>
    )
}