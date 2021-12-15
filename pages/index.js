import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.genernal_intro_container} className='grid mx-44 my-10 grid-cols-2'>
        <div className={styles.general_intro__img}>
            <img src="images/generalIntro.svg" alt="General Intro Image" />
        </div>
        <div className={styles.general_intro__text}>
            <div className={styles.title}>
                TỔNG QUAN KHÓA HỌC
            </div>
            <div className={styles.general_intro__textContent} className='mb-24'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sed gravida volutpat, in in mattis pellentesque. Egestas sed adipiscing elit arcu consectetur non phasellus sed commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper sed gravida volutpat, in in mattis pellodo.</p>
            </div>
            <div className={styles.general_intro__btn}>
                <a href="#">XEM THÊM</a>
            </div>
          </div>
        </div>
    </Layout>
  )
}
