import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/sree7771/image/upload/v1658312644/Frame_274_tph3zo.png"
          alt=""
        />
        <h1 className="tasty-heading"> Tasty Kitchens</h1>
      </div>
      <div className="home-header-container">
        <h1 className="home-heading"> Home </h1>
        <h1 className="cart-heading"> Cart </h1>
        <button type="button" onClick={onClickLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
