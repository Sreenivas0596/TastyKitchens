import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cart-img-container">
          <div>
            <img
              src="https://res.cloudinary.com/sree7771/image/upload/v1658492287/cooking_1_dxzxcl.png"
              alt=""
              className="cart-img"
            />
          </div>
          <h1 className="no-orders">No Orders Yet </h1>
          <p className="cart-description">
            {' '}
            Your cart is empty.Add something from the menu
          </p>
          <button type="button" className="order-now-button">
            Order Now
          </button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Cart
