import React from 'react'
import styles from '../styles/Information.module.css'
import Link from 'next/link'

const Information = () => (
  <div className={styles.Information}>
    <div className={styles.InformationContent}>
      <div className={styles.InformationHead}>
        <h2>Información de contacto:</h2>
      </div>
      <div className={styles.InformationForm}>
        <form action=''>
          <label htmlFor='name'>
            Nombre completo
            <input type='text' placeholder='Nombre completo' name='name' id='name' />
          </label>
          <label htmlFor='email'>
            Correo electrónico
            <input type='text' placeholder='Correo electrónico' name='email' id='email' />
          </label>
          <label htmlFor='address'>
            Dirección
            <input
              type='text'
              placeholder='Dirección'
              name='address'
              id='address'
            />
          </label>
          <label htmlFor='apto'>
            APTO
            <input type='text' placeholder='APTO' name='apto' id='apto' />
          </label>
          <label htmlFor='country'>
            País
            <input
              type='text'
              placeholder='País'
              name='country'
              id='country'
            />
          </label>
          <label htmlFor='state'>
            Estado
            <input type='text' placeholder='Estado' name='state' id='state' />
          </label>
          <label htmlFor='city'>
            Ciudad
            <input type='text' placeholder='Ciudad' name='city' id='city' />
          </label>
          <label htmlFor='cp'>
            Codigo postal
            <input type='text' placeholder='Codigo postal' name='cp' id='cp' />
          </label>
          <label htmlFor='phone'>
            Telefono
            <input type='text' placeholder='Telefono' name='phone' id='phone' />
          </label>
        </form>
      </div>
      <div className={styles.InformationButtons}>
        <div className={styles.InformationBack}>Regresar</div>
        <Link href='/payment'>
          <a>
            <div className={styles.InformationNext}>Pagar</div>
          </a>
        </Link>
      </div>
    </div>
    <div className={styles.InformationSidebar}>
      <h3>Pedido:</h3>
      <div className={styles.InformationItem}>
        <div className={styles.InformationElement}>
          <h4>ITEM Name</h4>
          <span>$10</span>
        </div>
      </div>
    </div>
  </div>
)

export default Information
