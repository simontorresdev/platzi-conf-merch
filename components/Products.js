import React from 'react'
import styles from '../styles/Products.module.css'
import { Product } from './Product'

export const Products = ({ products }) => {
  return (
    <div className={styles.ProductsItems}>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
