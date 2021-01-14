import React, { useContext } from 'react'
import styles from '../styles/Products.module.css'
import { Product } from './Product'
import { AppContext } from '../context/appContext'

export const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = product => {
    addToCart(product)
  }

  return (
    <div className={styles.ProductsItems}>
      {products.map(product => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
