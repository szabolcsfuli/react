import { Fragment, useContext } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartContext from './store/cart-context'

function App () {
  const ctxCart = useContext(CartContext)

  return (
    <Fragment>
      {ctxCart.cartIsShow && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  )
}

export default App
