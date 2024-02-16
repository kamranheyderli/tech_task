import React from 'react'
import styles from "./Footer.module.scss";
import {NavigationContainer} from "../../Common/NavigationContainer/NavigationContainer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerNavigation}>
                    <div className={styles.navigationContainer}>
                        <div className={styles.logoBlock}>
                            <a href="/">Logo</a>
                        </div>
                        <div className={styles.navigationBlock}>
                            <a href="">Haqqımızda</a>
                            <a href="">Kitablar</a>
                            <a href="">İmtahanlar</a>
                            <a href="">Bizimlə əlaqə</a>
                            <select name="languageSelection" id="languageSelection"
                                    className={styles.languageSelection}>
                                <option value="AZ" selected>AZ</option>
                                <option value="EN">EN</option>
                                <option value="RU">RU</option>
                                <option value="TR">TR</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.contactColumn}>
                        <div className={styles.contactRow}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <a href="mailto:nümunə@gmail.com">Nümunə@gmail.com</a>
                        </div>
                        <div className={styles.contactRow}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <a href="tel:+0000000000">000 000 00 00</a>
                        </div>
                        <div className={styles.socialBlock}>
                            <div className={styles.socialItem}>
                                <a href="https://www.instagram.com/kamranheyderliii">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                            </div>
                            <div className={styles.socialItem}>
                                <a href="https://www.facebook.com/">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </a>
                            </div>
                            <div className={styles.socialItem}>
                                <a href="https://wa.me/994516621599">
                                    <FontAwesomeIcon icon={faWhatsapp}/>
                                </a>
                            </div>
                            <div className={styles.socialItem}>
                                <a href="https://web.telegram.org/a/">
                                    <FontAwesomeIcon icon={faTelegram}/>
                                </a>
                            </div>

                        </div>
                        <div className={styles.copyrightBlock}>
                            <p>© 2024, şirkərin adı. Bütün hüquqlar qorunur</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
