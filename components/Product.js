import React from 'react'
import styles from '../styles/Products.module.css'

export const Product = ({ product }) => {
  const { image, title, price, description } = product
  return (
    <div className={styles.ProductsItem}>
      <img src={image} alt={title} />
      <div className={styles.ProductItemInfo}>
        <h2>{title}
          <span>${price}</span>
        </h2>
        <p>{description}</p>
      </div>
      <button type='button'>Comprar</button>
    </div>
  )
}
