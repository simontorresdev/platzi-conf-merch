import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import styles from '../styles/Success.module.css'
import { Map } from '../components/Map'
import { useGoogleAddress } from '../hooks/useGoogleAdress'

const Success = () => {
  const { state } = useContext(AppContext)
  const { buyer } = state
  const location = useGoogleAddress(buyer[0].address)

  return (
    <div className={styles.Succes}>
      <div className={styles.SuccessCcontent}>
        <h2>{`${buyer.name}, gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className={styles.SuccessMap}>
          <Map data={location} />
        </div>
      </div>
    </div>
  )
}

export default Success
