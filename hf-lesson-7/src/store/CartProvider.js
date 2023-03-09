import CartContext from './cart-context'
import { useReducer, useState } from 'react'


const cartReducer = (state, action) => {
  let { items } = state
  let totalAmount = 0
  let totalCount = 0
  let index = items.findIndex(item => {
    return item.id === action.item.id
  })

  switch (action.type) {
    case 'ADD':
      if (index > -1) {
        items[index].amount *= 1
        items[index].amount += action.item.amount * 1
      } else {
        items.push(action.item)
      }

      break
    case 'REMOVE':
      if (index > -1) {
        if (items[index].amount - 1 < 1) {
          items.splice(index, 1)
        } else {
          items[index].amount -= 1
        }
      }
      break
    default:
  }
  items.map(item => {
    totalAmount += item.amount * item.price
    totalCount += item.amount * 1
    return item
  })

  return {
    items: items,
    totalAmount: totalAmount,
    totalCount: totalCount
  }
}

const CartProvider = props => {
  const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalCount: 0,
    cartIsShow: false
  }
  
  const [cartState, discPatchCartReducer] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemCartHandler = item => {
    discPatchCartReducer({ type: 'ADD', item: item })
  }

  const removeItemCartHandler = item => {
    discPatchCartReducer({ type: 'REMOVE', item: item })
  }

  const [cartIsShow, setCartIsShowState] = useState(false)

  const setCartIsShow = () => {
    setCartIsShowState(!cartIsShow)
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalCount: cartState.totalCount,
    cartIsShow: cartIsShow,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
    setCartIsShow: setCartIsShow
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
