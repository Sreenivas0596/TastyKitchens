import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'

import NotFound from './components/NotFound'
import RestaurantContext from './RestaurantContext'

const getLocalStorageFoodItemsList = () => {
  const localStorageFoodCartItemsList = localStorage.getItem('cartData')

  const parsedLocalStorageCartList = JSON.parse(localStorageFoodCartItemsList)

  if (parsedLocalStorageCartList === null) {
    return []
  }
  return parsedLocalStorageCartList
}

class App extends Component {
  state = {foodItemsList: getLocalStorageFoodItemsList()}

  addFoodItems = foodItems => {
    const {foodItemsList} = this.state
    this.setState({
      foodItemsList: [...foodItemsList, foodItems],
    })
  }

  render() {
    const {foodItemsList} = this.state

    localStorage.setItem('cartData', JSON.stringify(foodItemsList))

    return (
      <RestaurantContext.Provider
        value={{
          foodItemsList,
          addFoodItems: this.addFoodItems,
        }}
      >
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/restaurant/:id"
              component={RestaurantDetails}
            />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </>
      </RestaurantContext.Provider>
    )
  }
}

export default App
