import React from 'react'
import styles from "./Header.module.scss";
import {NavigationContainer} from "../../Common/NavigationContainer/NavigationContainer.jsx";
import {MobileMenu} from "../../Common/MobileMenu/MobileMenu.jsx";
export const Header = () => {
    return (
        <>
            <MobileMenu/>
            <header className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <div className={styles.navigationBlock}>
                        <NavigationContainer/>
                    </div>
                    <div className={styles.buttonsBlock}>
                        <div className={styles.button}>Daxil ol</div>
                        <div className={styles.button}>Qeydiyyat</div>
                    </div>
                </div>
            </header>
        </>
    )
}
