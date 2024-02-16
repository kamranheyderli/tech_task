import React, {useCallback, useState} from 'react'
import styles from "./HomePage.module.scss";
import {Header} from "../Components/Header/Header.jsx";
import categoriesData from '../../../../public/PagesData/categories.json';
import {SectionHeading} from "../Common/SectionHeading/SectionHeading.jsx";
import {Footer} from "../Components/Footer/Footer.jsx";
import {ExamCategories} from "../Common/ExamsCategories/ExamCategories.jsx";
import {ExamsCardList} from "../Common/ExamsCardList/ExamsCardList.jsx";

export const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handleCategoryClick = useCallback((categoryId) => {
        setSelectedCategory(categoryId);
    }, []);
    
    return (
        <div className={styles.pageWrapper}>
            <section className={styles.imageSection}>
                <div className={styles.textBlock}>
                    <h1>İmtahanlar</h1>
                    <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it</h4>
                </div>
            </section>
            <section className={styles.categorySection}>
                <SectionHeading lightText="İmtahan" boldText="Kateqoriya seç"/>
                <div className={styles.categoryVariants}>
                    {categoriesData.map(category => (
                        <div
                            key={category.id}
                            className={`${styles.categoryBlock} ${selectedCategory === category.id ? styles.selectedCategory : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <p>{category.category}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className={styles.examsSection}>
                <SectionHeading lightText="Ən çox işlənənlər" boldText="İmtahanlar"/>
                <div className={styles.examsContent}>
                    <ExamCategories setSelected={setSelectedCategory} />
                    <ExamsCardList selectedCategory={selectedCategory}/>
                </div>
            </section>
        </div>

    )
}
