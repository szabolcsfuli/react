import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext, useEffect } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Price from '../Meals/Price'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  useEffect(() => {
    if (cartCtx.totalCount === 0) {
      cartCtx.setCartIsShow()
    }
  }, [cartCtx])

  const cartItems = (
    <ul className={classes['cart--items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => {
            cartCtx.removeItem(item)
          }}
          onAdd={() => {
            cartCtx.addItem({ ...item, ...{ amount: 1 } })
          }}
        />
      ))}
    </ul>
  )
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <Price price={cartCtx.totalAmount}></Price>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={cartCtx.setCartIsShow}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
