import React from 'react'
import styles from '../styles/Success.module.css'

const Success = () => {
  return (
    <div className={styles.Succes}>
      <div className={styles.SuccessCcontent}>
        <h2>Nombre, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className={styles.SuccessMap}>Google Maps</div>
      </div>
    </div>
  )
};

export default Success
