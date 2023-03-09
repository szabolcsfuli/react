import React, { useContext, useRef } from 'react'
import { Button, Form, Dropdown, Icon } from 'semantic-ui-react'
import CartContext from '../../store/CartContext'

const ProductForm = () => {
  const ctxCart = useContext(CartContext)
  const productName = useRef()
  const price = useRef()
  const category = useRef()

  const submitHandler = e => {
    e.preventDefault()
    console.log(category.current)
    debugger
    ctxCart.add({
      productName: productName.current.value,
      price: price.current.value,
      category: category.current.value
    })
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Field>
        <label>Product Name</label>
        <input ref={productName} placeholder='Product Name' />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input ref={price} placeholder='Price' />
      </Form.Field>
      <label>Category</label>
      <CategoryDropDown ref={category}></CategoryDropDown>
      <br></br>
      <Button primary type='submit'>
        Submit
      </Button>
    </Form>
  )
}

const CategoryDropDown = React.forwardRef((props, ref) => {
  const options = [
    {
      key: '1',
      text: 'IT',
      value: '1',
      image: <Icon name='user secret' />
    },
    {
      key: '2',
      text: 'Poetry',
      value: '2',
      image: <Icon name='comments' />
    },
    {
      key: '3',
      text: 'Academy',
      value: '3',
      image: <Icon name='bolt' />
    }
  ]
  return (
    <Dropdown
      ref={ref}
      placeholder='Select Category'
      fluid
      selection
      options={options}
    />
  )
})

export default ProductForm
