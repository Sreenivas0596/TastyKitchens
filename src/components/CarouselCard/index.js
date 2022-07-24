import './index.css'

const CarouselCard = props => {
  const {carouselData} = props
  const {imageUrl} = carouselData

  return (
    <li className="carousel-list-item">
      <img src={imageUrl} alt="offer" className="carousel-img" />
    </li>
  )
}

export default CarouselCard
