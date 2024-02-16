import React from 'react'
import styles from "./Footer.module.scss";
import {NavigationContainer} from "../../Common/NavigationContainer/NavigationContainer.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faInstagram, faTelegram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerNavigation}>
                    <div className={styles.navigationContainer}>
                        <div className={styles.logoBlock}>
                            <Link to="/">Logo</Link>
                        </div>
                        <div className={styles.navigationBlock}>
                            <Link to="">Haqqımızda</Link>
                            <Link to="">Kitablar</Link>
                            <Link to="exams">İmtahanlar</Link>
                            <Link to="">Bizimlə əlaqə</Link>
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
                            <Link to="mailto:nümunə@gmail.com">Nümunə@gmail.com</Link>
                        </div>
                        <div className={styles.contactRow}>
                            <div className={styles.contactIcon}>
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <Link to="tel:+0000000000">000 000 00 00</Link>
                        </div>
                        <div className={styles.socialBlock}>
                            <div className={styles.socialItem}>
                                <Link to="https://www.instagram.com/kamranheyderliii">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </Link>
                            </div>
                            <div className={styles.socialItem}>
                                <Link to="https://www.facebook.com/">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </Link>
                            </div>
                            <div className={styles.socialItem}>
                                <Link to="https://wa.me/994516621599">
                                    <FontAwesomeIcon icon={faWhatsapp}/>
                                </Link>
                            </div>
                            <div className={styles.socialItem}>
                                <Link to="https://web.telegram.org/a/">
                                    <FontAwesomeIcon icon={faTelegram}/>
                                </Link>
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
