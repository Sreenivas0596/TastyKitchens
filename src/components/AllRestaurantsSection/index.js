import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'

import RestaurantCard from '../RestaurantCard'

import RestaurantsHeader from '../RestaurantsHeader'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'INPROGRESS',
}

class AllRestaurantsSection extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    allRestaurantsDetailsList: [],
    activePage: 1,
    totalActivePages: 0,
    selectedSortByValue: sortByOptions[0].value,
    searchInput: '',
  }

  componentDidMount() {
    this.getRestaurantsDetails()
  }

  getRestaurantsDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activePage, selectedSortByValue, searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const LIMIT = 9

    const offset = (activePage - 1) * LIMIT

    const url = `https://apis.ccbp.in/restaurants-list?search=${searchInput}&offset=${offset}&limit=${LIMIT}&sort_by_rating=${selectedSortByValue}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const totalRestaurants = data.total

      const totalActivePages = Math.ceil(totalRestaurants / LIMIT)

      console.log(totalActivePages)

      const updateData = data.restaurants.map(eachRestaurant => ({
        imageUrl: eachRestaurant.image_url,
        name: eachRestaurant.name,
        id: eachRestaurant.id,
        cuisine: eachRestaurant.cuisine,
        userRating: {
          rating: eachRestaurant.user_rating.rating,
          totalReviews: eachRestaurant.user_rating.total_reviews,
        },
      }))

      this.setState({
        allRestaurantsDetailsList: updateData,
        apiStatus: apiStatusConstants.success,
        totalActivePages,
      })
    }
  }

  onClickRightButton = () => {
    const {activePage, totalActivePages} = this.state

    if (activePage < totalActivePages) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurantsDetails,
      )
    }
  }

  onClickLeftButton = () => {
    const {activePage} = this.state

    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurantsDetails,
      )
    }
  }

  updateSortByValue = value => {
    this.setState({selectedSortByValue: value}, this.getRestaurantsDetails)
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchKeyDown = event => {
    if (event.key === 'Enter') {
      this.getRestaurantsDetails()
    }
  }

  renderRestaurantsSuccessView = () => {
    const {
      allRestaurantsDetailsList,
      activePage,
      totalActivePages,
      selectedSortByValue,
      searchInput,
    } = this.state

    return (
      <div className="all-restaurants-section">
        <RestaurantsHeader
          sortByOptions={sortByOptions}
          selectedSortByValue={selectedSortByValue}
          updateSortByValue={this.updateSortByValue}
        />
        <div className="Search-container">
          <div className="input-container">
            <input
              type="search"
              value={searchInput}
              className="input"
              onChange={this.onChangeSearchInput}
              onKeyDown={this.onSearchKeyDown}
              placeholder="Search"
            />
            <BsSearch className="search" />
          </div>
        </div>
        <ul>
          {allRestaurantsDetailsList.map(eachRestaurant => (
            <RestaurantCard
              restaurantsDetails={eachRestaurant}
              key={eachRestaurant.id}
            />
          ))}
        </ul>
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.onClickLeftButton}
            className="button"
            testid="pagination-left-button"
          >
            <RiArrowLeftSLine className="arrow" />
          </button>
          <p className="page-number">
            <span testid="active-page-number">{activePage}</span> of
            {totalActivePages}
          </p>
          <button
            type="button"
            onClick={this.onClickRightButton}
            className="button"
            testid="pagination-right-button"
          >
            <RiArrowRightSLine className="arrow" />
          </button>
        </div>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" testid="restaurants-list-loader">
      <Loader type="TailSpin" color="#f7931e" height={80} width={80} />
    </div>
  )

  renderRestaurantsDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderRestaurantsSuccessView()

      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderRestaurantsDetails()}</div>
      </div>
    )
  }
}

export default AllRestaurantsSection
