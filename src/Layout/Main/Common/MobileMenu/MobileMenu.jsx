import React, {useContext, useCallback} from 'react'
import styles from "./MobileMenu.module.scss";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import { Link } from 'react-router-dom';

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
                <Link onClick={handleMobileMenuClose} to="">Haqqımızda</Link>
                <Link onClick={handleMobileMenuClose} to="">Kitablar</Link>
                <Link onClick={handleMobileMenuClose} to="exams">İmtahanlar</Link>
                <Link onClick={handleMobileMenuClose} to="">Bizimlə əlaqə</Link>
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
