import React from 'react'
import styles from "./SectionHeading.module.scss";

export const SectionHeading = ({lightText,boldText}) => {
    return (
        <div className={styles.sectionHeading}>
            <h5>{lightText}</h5>
            <h2>{boldText}</h2>
        </div>
    )
}
