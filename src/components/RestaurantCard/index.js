import {Link} from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'

import './index.css'

const RestaurantCard = props => {
  const {restaurantsDetails} = props

  const {imageUrl, name, cuisine, userRating, id} = restaurantsDetails
  const {rating, totalReviews} = userRating

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link">
      <li className="restaurant-list">
        <img src={imageUrl} alt="" className="restaurant-img" />
        <div className="restaurant-description">
          <h1 className="restaurant-name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="ratings-container">
            <AiOutlineStar className="star" />
            <p className="rating">{rating}</p>
            <p className="total-ratings"> ({totalReviews} ratings)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
