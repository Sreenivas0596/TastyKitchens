import {Component} from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import './index.css'
import RestaurantContext from '../../RestaurantContext'

class FoodItemCard extends Component {
  state = {quantity: 0}

  render() {
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {addFoodItems} = value

          const {quantity} = this.state
          const {foodItemDetails} = this.props

          const {cost, name, imageUrl, rating} = foodItemDetails

          const onClickAdd = () => {
            this.setState(
              prevState => ({quantity: prevState.quantity + 1}),
              addFoodItems({...foodItemDetails, quantity: quantity + 1}),
            )
          }

          return (
            <li className="food-item-container" testid="foodItem">
              <div>
                <img
                  src={imageUrl}
                  alt="restaurant"
                  className="food-item-img"
                />
              </div>
              <div className="food-item-description">
                <div>
                  <h1 className="food-item-name">{name}</h1>
                  <p className="food-item-cost">{cost}</p>
                </div>
                <div className="ratings-container">
                  <AiOutlineStar className="food-item-star" />
                  <p className="food-item-rating">{rating}</p>
                </div>
                {quantity > 0 ? (
                  <div>
                    <BsDashSquare />
                    <p>{quantity}</p>
                    <BsPlusSquare />
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-button"
                    onClick={onClickAdd}
                  >
                    ADD
                  </button>
                )}
              </div>
            </li>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default FoodItemCard
