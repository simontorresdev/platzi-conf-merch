import React, { useContext } from 'react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { AppContext } from '../context/appContext'

export const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <div className={styles.Header}>
      <Link href='/'>
        <a>
          <h1 className={styles.HeaderTitle}>PlatziConf Merch</h1>
        </a>
      </Link>
      <div className={styles.HeaderCheckout}>
        <Link href='/checkout'>
          <a><i className='fas fa-shopping-basket' /></a>
        </Link>
        <div className={styles.HeaderAlert}>
          {cart.length}
        </div>
      </div>
    </div>
  )
}
