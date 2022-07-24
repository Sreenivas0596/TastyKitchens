import React from 'react'

const RestaurantContext = React.createContext({
  quantity: 0,
  onIncreaseQuantity: () => {},
  foodItemsList: {},
  addFoodItems: () => {},
})

export default RestaurantContext
