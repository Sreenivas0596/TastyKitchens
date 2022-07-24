import {withRouter, Link} from 'react-router-dom'
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
      <div className="nav-content">
        <div className="img-container">
          <Link to="/" className="restaurant-link">
            <div className="header-tast-heading">
              <img
                src="https://res.cloudinary.com/sree7771/image/upload/v1658312644/Frame_274_tph3zo.png"
                alt="website logo"
              />
              <h1 className="tasty-heading"> Tasty Kitchens</h1>
            </div>
          </Link>
        </div>
        <ul className="home-header-container">
          <Link to="/" className="restaurant-link">
            <li className="home-heading"> Home </li>
          </Link>
          <Link to="/cart" className="restaurant-link">
            <li className="cart-heading"> Cart </li>
          </Link>
          <button
            type="button"
            onClick={onClickLogout}
            className="logout-button"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
