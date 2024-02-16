import React, { useEffect } from 'react'
import styles from "./ExamsPage.module.scss";
import {Header} from "../Components/Header/Header.jsx";
import {Footer} from "../Components/Footer/Footer.jsx";
import {faArrowRight, faCalendar, faClock, faFileLines, faMessage, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import participantsData from "../../../../public/PagesData/participants.json"
import {SectionHeading} from "../Common/SectionHeading/SectionHeading.jsx";
import commentators from "../../../../public/PagesData/commentators.json";

export const ExamsPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
    return (
        <div className={styles.examsPageWrapper}>
          
            <div className={styles.examsPageContent}>
                <section className={styles.examsBlackSection}>
                    <div className={styles.textBlock}>
                        <h1>3-cü sinif imtahanı</h1>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                        <li>Lorem Ipsum has been the industry's standard dummy text ever</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                        <button className={styles.buyButton}>1 Azn-imtahanı al</button>
                    </div>
                    <img className={styles.blackSectionImage}
                         src="https://s3-alpha-sig.figma.com/img/8c08/e116/254eca5f17b913c874afb12ee4949f89?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VuCuzQHI0OaL-wO3nEwKK7EOGqMrrIyNtJhShOUrCXMvc7k5I87mApP57GPJFjAg8uIV8oUipm0Cj34v01-ln68oyRnvm6yu6n-fKiKGIxw~rm1zACJZKc0epSrhXvFZbsVZCVg7JszYu60VmtIaL6shog24X3qIlpS8RjBAmkmR5S2dmkmsMFnrwYL9alOarJFIr3aqVp~779Njwrxlacb5DCM19Qt6vjQdc34HTIA1sKuPU0N4Qn17ZDCzOs4vUOBfbjuEZ-yfLQoexd8apqudGjhd8BHBKu383bVK9MPxPBf4D3SlNUkHDUAm1VP5h~Ki-QiDsKeCJo2FVG718g__"
                         alt="Imtahanlar"/>
                </section>
                <section className={styles.examsResultsSection}>
                    <div className={styles.examsInfo}>
                        <h3>Məlumat</h3>
                        <div className={styles.examsDetails}>
                            <div className={styles.detailBlock}>
                                <FontAwesomeIcon icon={faClock}/>
                                <p>45 dəqiqə</p>
                            </div>
                            <div className={styles.detailBlock}>
                                <FontAwesomeIcon icon={faFileLines}/>
                                <p>20 sual</p>
                            </div>
                            <div className={styles.detailBlock}>
                                <FontAwesomeIcon icon={faCalendar}/>
                                <p>22.05.2023 hazırlanıb</p>
                            </div>
                        </div>
                        <h3>Suallar</h3>
                        <li>Azərbaycan dili-10 sual</li>
                        <li>Rizyyaziyyat-10 sual</li>
                    </div>
                    <div className={styles.examsResults}>
                        <h2>İmtahan üzrə nəticələr</h2>
                        <div className={styles.participantsResults}>
                            {participantsData.map((participant, index) => (
                                <div key={index} className={styles.participantRow}>
                                    <div className={styles.participantName}>
                                        <img src={`../../../../public/Icons/${participant.icon}`}
                                             alt={`place-${participant.place}`}/>
                                        <p>{participant.name}</p>
                                    </div>
                                    <div className={styles.participantScore}>
                                        <p>{`${participant.score} bal`}</p>
                                        <div className={styles.dot}></div>
                                        <h5>{`${participant.time} dəq`}</h5>
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <SectionHeading boldText="Rəylər"/>
                <section className={styles.commentsSection}>
                    <div className={styles.commentsSummaryContent}>
                        <div className={styles.commentsSummary}>
                            <h1>4.9</h1>
                            <div className={styles.commentsCount}>
                                <FontAwesomeIcon icon={faMessage}/>
                                <p>440 rəy</p>
                            </div>
                        </div>
                        <div className={styles.commentsDetails}>
                            <div className={styles.detailRow}>
                                <p>378</p>
                                <div className={styles.starsBlock}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                </div>
                                <div className={styles.loadingBar}>
                                    <div className={styles.loadingBarFiller}
                                         style={{
                                             width: "100%"
                                         }}
                                    ></div>
                                </div>
                            </div>
                            <div className={styles.detailRow}>
                                <p>253</p>
                                <div className={styles.starsBlock}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar} style={{
                                        color: "#D9D9D9"
                                    }}/>
                                </div>
                                <div className={styles.loadingBar}>
                                    <div className={styles.loadingBarFiller}
                                         style={{
                                             width: "75%"
                                         }}
                                    ></div>
                                </div>
                            </div>
                            <div className={styles.detailRow}>
                                <p>151</p>
                                <div className={styles.starsBlock}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar} style={{
                                        color: "#D9D9D9"
                                    }}/>
                                    <FontAwesomeIcon icon={faStar} style={{
                                        color: "#D9D9D9"
                                    }}/>
                                </div>
                                <div className={styles.loadingBar}>
                                    <div className={styles.loadingBarFiller}
                                         style={{
                                             width: "50%"
                                         }}></div>
                                </div>
                            </div>
                            <div className={styles.detailRow}>
                                <p>100</p>
                                <div className={styles.starsBlock}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}
                                    />
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                </div>
                                <div className={styles.loadingBar}>
                                    <div className={styles.loadingBarFiller}
                                         style={{
                                             width: "35%"
                                         }}></div>
                                </div>
                            </div>
                            <div className={styles.detailRow}>
                                <p>50</p>
                                <div className={styles.starsBlock}>
                                    <FontAwesomeIcon icon={faStar}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                    <FontAwesomeIcon icon={faStar}
                                                     style={{
                                                         color: "#D9D9D9"
                                                     }}/>
                                </div>
                                <div className={styles.loadingBar}>
                                    <div className={styles.loadingBarFiller}
                                         style={{
                                             width: "20%"
                                         }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentsTotalContent}>
                        {commentators.map((commentator) => (
                            <div key={commentator.id} className={styles.commentCard}>
                                <h3>{commentator.name}</h3>
                                <div className={styles.ratingBlock}>
                                    <div className={styles.starsBlock}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                    </div>
                                    <p>{commentator.timestamp}</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard </p>
                            </div>
                        ))}
                    </div>
                    <button className={styles.showMore}>
                        Daha çox
                    </button>
                </section>
            </div>
        </div>
    )
}
