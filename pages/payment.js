import React from 'react'
import styles from '../styles/Payment.module.css'

const Payments = () => {
  return (
    <div className={styles.Payment}>
      <div className={styles.PaymentContent}>
        <h3>Resumen del pedido:</h3>
        <div className={styles.PaymentButton}>Boton de pago con Paypal</div>
      </div>
    </div>
  )
};

export default Payments
