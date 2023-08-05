// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCost = 0
      cartList.forEach(eachItem => {
        totalCost += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <h1 className="summary-heading">
            Order Total:
            <span className="span-price">{totalCost}/-</span>
          </h1>
          <p className="summary-para">{cartList.length} Items in Cart</p>
          <button className="checked-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
