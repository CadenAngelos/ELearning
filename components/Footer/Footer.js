import React from 'react'
import styles from './Footer.module.css'
function Footer() {
    return (
        <div>
            <img className={styles.rewardLeman} src="images/lemanLogo.svg" alt="" />
            <div className={styles.iconArr}>
                <img src="images/iconArr.svg" alt="" />
            </div>
            <div className={styles.footer_container}>
                <div className={styles.footer_component}>
                    <div className={styles.title}>CÔNG TY</div>
                    <ul className={styles.footer_list}>
                        <li><a href="#">Trang Chủ</a></li>
                        <li><a href="#">Tổng Quan</a></li>
                        <li><a href="#">Vị Trí</a></li>
                        <li><a href="#">Tiện Ích</a></li>
                        <li><a href="#">Thư Viện</a></li>
                        <li><a href="#">Tin Tức</a></li>
                        <li><a href="#">Liên Hệ</a></li>                        
                    </ul>
                </div>
                <div className={styles.footer_component}>
                    <div className={styles.title}>LIÊN HỆ</div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/phone.svg" alt="" /></span>
                        <div>
                            <div>091 888 7920</div>
                            <br />
                            <div>028 6297 1999</div>
                        </div>                     
                    </div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/twitter.svg" alt="" /></span>
                        <div className={styles.footer_content}>
                            24 Hạ Long, Phường 2, TP. Vũng Tàu, Bà Rịa _ Vũng Tàu
                        </div>
                    </div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/mail.svg" alt="" /></span>
                        <div className={styles.footer_content}>
                            support@lemancapresident.vn
                        </div>
                    </div>
                </div>
                <div className={styles.footer_component}>
                    <div className={styles.title}>CHỦ SỞ HỮU</div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/phone.svg" alt="" /></span>
                        <div>
                            Công Ty Cổ Phần Quản Lý CT
                        </div>                     
                    </div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/twitter.svg" alt="" /></span>
                        <div className={styles.footer_content}>
                            MST: 0314711389
                        </div>
                    </div>
                    <div className={styles.footer_contact}>
                        <span><img src="images/mail.svg" alt="" /></span>
                        <div className={styles.footer_content}>
                            60A Trường Sơn, Phường 2, Quận Tân Bình, Thành Phố HCM, Việt Nam
                        </div>
                    </div>
                </div>
                <div className={styles.footer_component}>
                    <div className={styles.title}>ĐƠN VỊ THÀNH VIÊN</div>
                    <div className={styles.member}>CT Group</div>
                    <div className={styles.member}>Leman Luxury Apartmant</div>
                    <div className={styles.member}>Leman Parking Lot</div>
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
