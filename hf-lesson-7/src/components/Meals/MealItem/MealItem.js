import classes from './MealItem.module.css'
import MealItemForm from './MealItemFrom'
import Price from '../Price'

const MealItem = props => {

  const item = {
    id: props.id,
    name: props.name,
    price: props.price
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <Price price={props.price} />
      </div>
      <div>
        <MealItemForm item={item} />
      </div>
    </li>
  )
}
export default MealItem
