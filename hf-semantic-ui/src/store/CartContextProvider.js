import { useContext, useReducer } from 'react'
import CartContext from './CartContext'

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      console.log({
        action: action
      })
      state = [...state, action.item]
      break
    case 'REMOVE':
      break
    default:
  }

  return state
}

const CartContextProvider = props => {
  const cartContext = useContext(CartContext)
  const [cartReducer, dispatch] = useReducer(CartReducer, [])

  const cartContextValue = {
    products: [],
    totalCount: 10,
    totalAmount: 0,
    add: item => {
      console.log('add')
      dispatch({ type: 'ADD', item: item })
    },
    remove: () => {}
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
