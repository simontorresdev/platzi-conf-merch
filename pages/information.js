import React, { useRef, useContext } from 'react'
import styles from '../styles/Information.module.css'
import Link from 'next/link'
import { AppContext } from '../context/appContext'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const form = useRef(null)
  const { cart } = state

  const handleSubmit = () => {
    const formData = new FormData(form.current)
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone')
    }
    addToBuyer(buyer)
  }

  return (
    <div className={styles.Information}>
      <div className={styles.InformationContent}>
        <div className={styles.InformationHead}>
          <h2>Información de contacto:</h2>
        </div>
        <div className={styles.InformationForm}>
          <form ref={form}>
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
          <Link href='/checkout'>
            <a>
              <div className={styles.InformationBack}>Regresar</div>
            </a>
          </Link>
          <div className={styles.InformationNext}>
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className={styles.InformationSidebar}>
        <h3>Pedido:</h3>
        {cart.map((item, id) => (
          <div className={styles.InformationItem} key={id}>
            <div className={styles.InformationElement}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Information
