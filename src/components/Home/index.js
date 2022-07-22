import {Component} from 'react'
import Cookies from 'js-cookie'
import Slider from 'react-slick'
import AllRestaurantsSection from '../AllRestaurantsSection'
import Header from '../Header'
import CarouselCard from '../CarouselCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {allHomeCarouselImagesList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getHomeCarouselImages()
  }

  getHomeCarouselImages = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/restaurants-list/offers'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    console.log(response)

    if (response.ok) {
      const data = await response.json()

      console.log(data)

      const updateData = data.offers.map(eachImage => ({
        id: eachImage.id,
        imageUrl: eachImage.image_url,
      }))

      this.setState({
        allHomeCarouselImagesList: updateData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderHomeCarouselSuccessView = () => {
    const {allHomeCarouselImagesList} = this.state

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div>
        <Slider {...settings}>
          {allHomeCarouselImagesList.map(eachCarousel => (
            <CarouselCard carouselData={eachCarousel} key={eachCarousel.id} />
          ))}
        </Slider>
        <div>
          <h1 className="popular-rest-heading"> Popular Restaurants </h1>
          <p className="description">
            {' '}
            Select your favourite restaurant special dish and make your day
            happy{' '}
          </p>
          <hr className="header" />
        </div>
        <AllRestaurantsSection />
      </div>
    )
  }

  renderHomeCarouselImages = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeCarouselSuccessView()

      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.renderHomeCarouselImages()}</div>
      </div>
    )
  }
}

export default Home
