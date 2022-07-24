import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import CartItems from '../CartItems'
import './index.css'
import RestaurantContext from '../../RestaurantContext'

class Cart extends Component {
  render() {
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {foodItemsList, quantity} = value

          const foodItemsListLength = foodItemsList.length

          if (foodItemsListLength === 0) {
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
                  <Link to="/">
                    <button type="button" className="order-now-button">
                      Order Now
                    </button>
                  </Link>
                </div>
                <Footer />
              </div>
            )
          }
          return <CartItems foodItemsList={foodItemsList} quantity={quantity} />
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default Cart
