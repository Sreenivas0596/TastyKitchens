import './index.css'

const CarouselCard = props => {
  const {carouselData} = props
  const {imageUrl} = carouselData

  return (
    <div>
      <img src={imageUrl} alt="" className="carousel-img" />
    </div>
  )
}

export default CarouselCard
