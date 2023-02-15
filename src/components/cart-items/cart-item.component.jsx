

import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetails, Name } from './cart-item.styles'

const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>

        <Name className='name'>{name}</Name>
      
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetails>
      
        
    </CartItemContainer>
  )
}

export default CartItem