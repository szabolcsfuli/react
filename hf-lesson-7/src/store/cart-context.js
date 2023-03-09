import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  totalItems: 0,
  totalCount: 0,
  cartIsShow: false,
  addItem: item => {},
  removeItem: id => {},
  setCartIsShow: () => {},
})

export default CartContext
