import {AiOutlineStar} from 'react-icons/ai'
import './index.css'

const FoodItemCard = props => {
  const {foodItemDetails} = props

  const {cost, name, imageUrl, rating} = foodItemDetails

  return (
    <li className="food-item-container">
      <div>
        <img src={imageUrl} alt="" className="food-item-img" />
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
        <button type="button" className="add-button">
          {' '}
          ADD{' '}
        </button>
      </div>
    </li>
  )
}

export default FoodItemCard
