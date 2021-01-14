import React, { useContext } from 'react'
import Link from 'next/link'
import styles from '../styles/Checkout.module.css'
import { AppContext } from '../context/appContext'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const handleRemove = product => {
    removeFromCart(product)
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className={styles.Checkout}>
      <div className={styles.CheckoutContent}>
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map(item => (
          <div className={styles.CheckoutItem} key={item.id}>
            <div className={styles.CheckoutElement}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type='button' onClick={() => handleRemove(item)}><i className='fas fa-trash' /></button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className={styles.CheckoutSidebar}>
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link href='/information'>
            <a><button type='button'>Continuar pedido</button></a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout
