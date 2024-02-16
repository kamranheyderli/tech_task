import React, {useContext, useCallback} from 'react'
import styles from "./MobileMenu.module.scss";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";

export const MobileMenu = () => {
    const {
        mobileMenuOpen,
        setMobileMenuOpen,
    } = useContext(LayoutContext);

    const handleMobileMenuClose = useCallback(
        () => {
            setMobileMenuOpen(false);
        },
        [setMobileMenuOpen, mobileMenuOpen],
    );

    return (
        <div className={`${styles.mobileMenuWrapper} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
            <div className={styles.mobileMenuContent}>
                <div className={styles.closeMenu}
                     onClick={handleMobileMenuClose}>
                    <FontAwesomeIcon icon={faCircleXmark}/>
                </div>
                <a href="">Haqqımızda</a>
                <a href="">Kitablar</a>
                <a href="exams">İmtahanlar</a>
                <a href="">Bizimlə əlaqə</a>
                <select name="languageSelection" id="languageSelection" className={styles.languageSelection}>
                    <option value="AZ" selected>AZ</option>
                    <option value="EN">EN</option>
                    <option value="RU">RU</option>
                    <option value="TR">TR</option>
                </select>
            </div>
        </div>
    )
}
