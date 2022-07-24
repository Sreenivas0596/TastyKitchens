import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import RestaurantContext from '../../RestaurantContext'

class Cart extends Component {
  state = {isOrderPlaced: false}

  onClickPlaceOrder = () => {
    this.setState({isOrderPlaced: true})
  }

  render() {
    const {isOrderPlaced} = this.state
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
          return (
            <div>
              <Header />
              <ul>
                {foodItemsList.map(eachCartItem => (
                  <li className="food-cart-item-container">
                    <img
                      src={eachCartItem.imageUrl}
                      alt=""
                      className="cart-item-img"
                    />
                    <h1 className="food-cart-name">{eachCartItem.name}</h1>
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
              <Footer />
            </div>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default Cart
