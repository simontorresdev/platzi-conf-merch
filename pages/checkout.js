import React from 'react'
import styles from '../styles/Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.Checkout}>
      <div className={styles.CheckoutContent}>
        <h3>Lista de Pedidos:</h3>
        <div className={styles.CheckoutItem}>
          <div className={styles.CheckoutElement}>
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type='button'>Eliminar</button>
        </div>
      </div>
      <div className={styles.CheckoutSidebar}>
        <h3>Precio Total: $10</h3>
        <button type='button'>Continuar pedido</button>
      </div>
    </div>
  )
}

export default Checkout
