import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'
import { PayPalButton } from 'react-paypal-button'
import styles from '../styles/Payment.module.css'
import { useRouter } from 'next/router'

const Payments = () => {
  const router = useRouter()
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state

  const paypalOptions = {
    clientId: 'AZUiVQzTQJm8A1dqcCCP9OzwNgXaAMtB64CcHjmID_xGXrGXo0VUATcIexd0ATfV0iyHUUS0W7pgVbqp',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder)
      router.push('/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className={styles.Payment}>
      <div className={styles.PaymentContent}>
        <h3>Resumen del pedido:</h3>
        {cart.map((item, id) => (
          <div className={styles.PaymentItem} key={id}>
            <div className={styles.PaymentElement}>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className={styles.PaymentButton}>
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('start payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  )
}

export default Payments
