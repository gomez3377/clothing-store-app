import {useContext} from 'react'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { CartContext } from '../../contexts/cart.context'
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles'



const Checkout = () => {
    const {cartItems, totalValue} = useContext(CartContext)

  return (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>

            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>

            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>

            </HeaderBlock>
            <HeaderBlock>

                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
     {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />
         
         )}
     
     
    <Total>Total : ${totalValue}</Total>
    </CheckoutContainer>
  )
}

export default Checkout