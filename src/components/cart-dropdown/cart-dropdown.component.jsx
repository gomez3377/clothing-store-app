import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-items/cart-item.component'

import { CartContext } from '../../contexts/cart.context'


import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
        {cartItems 
        ? (<CartItems>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
        </CartItems>)
        : <EmptyMessage as="h2">No Items in Cart</EmptyMessage>
        }
        <Button onClick={goToCheckoutHandler} >CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown