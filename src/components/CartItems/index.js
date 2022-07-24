import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class CartItems extends Component {
  state = {isOrderPlaced: false}

  onClickPlaceOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  render() {
    const {foodItemsList, quantity} = this.props
    const {isOrderPlaced} = this.state

    return (
      <div>
        {isOrderPlaced ? (
          <div>
            <Header />
            <div className="payment-container">
              <img
                src="https://res.cloudinary.com/sree7771/image/upload/v1658661871/Vector_4_bzptf7.png"
                alt=""
                className="payment-img"
              />
              <h1 className="payment-heading"> Payment Successful</h1>
              <p className="payment-description">
                Thank you for ordering <br />
                Your payment is successfully completed.
              </p>
              <Link to="/" className="payment-link">
                <button type="button" className="go-to-home-page-button">
                  {' '}
                  Go To Home Page
                </button>
              </Link>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="cart-list-container">
            <Header />
            <div className="cart-list-items-container">
              <div className="cart-lis-items">
                <p>Item</p>
                <div className="cart-list-quantity-price-container">
                  <p>Quantity</p>
                  <p>Price</p>
                </div>
              </div>
              <ul>
                {foodItemsList.map(eachCartItem => (
                  <li className="food-cart-item-container" testid="cart-item">
                    <div>
                      <img
                        src={eachCartItem.imageUrl}
                        alt={eachCartItem.name}
                        className="cart-item-img"
                      />
                      <h1 className="food-cart-name">{eachCartItem.name}</h1>
                    </div>
                    <div className="plus-minus-container">
                      <BsDashSquare className="decrement" />
                      <p className="food-cart-quantity">{quantity}</p>
                      <BsPlusSquare className="increment" />
                    </div>
                    <div className="cost-container">
                      <BiRupee className="food-cart-rupee" />
                      <p className="food-cart-cost">{eachCartItem.cost}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="order-total">Order total:</p>
              <button
                type="button"
                className="place-order-button"
                onClick={this.onClickPlaceOrder}
              >
                Place Order
              </button>
            </div>
            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default CartItems
