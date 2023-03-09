import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useContext, useRef } from 'react'
import CartContext from '../../../store/cart-context'

const MealItemForm = props => {
  const amountInputRef = useRef()
  const ctxCart = useContext(CartContext)

  const submitHandler = event => {
    event.preventDefault()
    ctxCart.addItem({
      ...props.item,
      ...{ amount: amountInputRef.current.value }
    })
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.item.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
