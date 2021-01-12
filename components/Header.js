import React from 'react'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.HeaderTitle}>PlatziConf Merch</h1>
      <div className={styles.HeaderCcheckout}>
        Checkout
      </div>
    </div>
  )
}
