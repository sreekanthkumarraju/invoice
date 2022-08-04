import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest invoicing for  small businesses</h1>
                <div className={styles.paragraph}>
                   
                   
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home