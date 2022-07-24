import {AiOutlineStar} from 'react-icons/ai'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import './index.css'
import RestaurantContext from '../../RestaurantContext'

const FoodItemCard = props => {
  const {foodItemDetails} = props

  const {cost, name, imageUrl, rating} = foodItemDetails

  return (
    <RestaurantContext.Consumer>
      {value => {
        const {quantity, addFoodItems} = value

        return (
          <li className="food-item-container" testid="foodItem">
            <div>
              <img src={imageUrl} alt="restaurant" className="food-item-img" />
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
                  onClick={() => addFoodItems(foodItemDetails)}
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

export default FoodItemCard
