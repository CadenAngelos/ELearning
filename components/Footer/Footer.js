import React from 'react'
import styles from './Footer.module.css'
function Footer() {
    return (
        <div>
            <div className={styles.footer_container}>
                <div className={styles.footer_component}>
                    <div className={styles.title}>Quicklink</div>
                    <ul className={styles.footer_list}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>                                          
                    </ul>
                </div>
                <div className={styles.footer_component}>
                    <div className={styles.title}>Contact Us</div>
                    <div className={styles.footer_contact}>
                        <div>
                            <div>091 888 7920</div>
                        </div>                     
                    </div>
                    <div className={styles.footer_contact}>
                    
                        <div className={styles.footer_content}>
                            24 Hạ Long, Phường 2, TP. Vũng Tàu, Bà Rịa _ Vũng Tàu
                        </div>
                    </div>
                    <div className={styles.footer_contact}>
                        <div className={styles.footer_content}>
                            support@lemsdadresiasdent.vn
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                    <div className={styles.copy}>&copy; Copyright by CT Group</div>
                    <div className={styles.secure}>Chính Sách Bảo Mật Website</div>
            </div>
        </div>
    )
}

export default Footer
