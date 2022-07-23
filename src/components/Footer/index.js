import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-bg-container">
      <div className="sns-container">
        <img
          src="https://res.cloudinary.com/sree7771/image/upload/v1658551419/Vector_1_agnf8v.png"
          alt=""
          className="footer-img"
        />
        <h1 className="footer-heading"> Tasty Kitchens</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food. Contact us soon
      </p>
      <div className="sns-container">
        <div className="pinterest-img">
          <FaPinterestSquare height={27} width={21} className="pin-img" />
        </div>
        <FaInstagram className="insta-img" />
        <FaTwitter className="twitter-img" />
        <div className="facebook-img">
          <FaFacebookSquare className="fb-img" />
        </div>
      </div>
    </div>
  )
}
