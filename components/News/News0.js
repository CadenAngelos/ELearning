import React from 'react'
import styles from './News0.module.css'
function News0() {
    return (
        <div className={styles.news}>
            <div className={styles.news_top}>
                <div className={styles.title}>THÔNG TIN KHÓA HỌC</div>
                <div className={styles.general_intro__btn}>
                    <a href="#">XEM THÊM</a>
                </div>
            </div>
            <div className={styles.news_bottom}>
                <div className={styles.news_bottom__left}>
                    <div className={styles.newsLeftImg}>
                        <img src="images/newsLeft.svg" alt="Left img" />
                    </div>
                    <div className={styles.subTitle}>
                        5 Steps Forming Tax_Exempt Nonprofit Corpor
                    </div>
                    <div className={styles.news_content}>
                        Aeneam imperdiet dignissim pulvinar. Nunv euismod dignissim pulbinar. So many tholj culem. Simply dummy text of the printing and typesetting.
                    </div>
                </div>
                <div className={styles.news_bottom__right}>
                    <div className={styles.news_bottom__right_new}>
                        <div className={styles.right_img}><img src="images/rightNews.png" alt="" /></div>
                        <div className={styles.right_content}>
                            <div className={styles.subTitle}>
                                The Growing Technology Initiate Excellent 
                            </div>
                            <div className={styles.news_content}>
                                Aeneam imperdiet dignissim pulvinar. Nunv euismod dignissim pulbinar.
                            </div>
                        </div>
                    </div>
                    <div className={styles.news_bottom__right_new}>
                        <div className={styles.right_img}><img src="images/rightNews.png" alt="" /></div>
                        <div className={styles.right_content}>
                            <div className={styles.subTitle}>
                                The Growing Technology Initiate Excellent 
                            </div>
                            <div className={styles.news_content}>
                                Aeneam imperdiet dignissim pulvinar. Nunv euismod dignissim pulbinar.
                            </div>
                        </div>
                    </div>
                    <div className={styles.news_bottom__right_new}>
                        <div className={styles.right_img}><img src="images/rightNews.png" alt="" /></div>
                        <div className={styles.right_content}>
                            <div className={styles.subTitle}>
                                The Growing Technology Initiate Excellent 
                            </div>
                            <div className={styles.news_content}>
                                Aeneam imperdiet dignissim pulvinar. Nunv euismod dignissim pulbinar.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News0
