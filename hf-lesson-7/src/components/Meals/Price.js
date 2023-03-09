import classes from './MealItem/MealItem.module.css'

const Price = props => {
  const { price } = props
  
  return <div className={classes.price}>${price.toFixed(2)}</div>
}

export default Price
