import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    submitError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitError = errorMsg => {
    this.setState({submitError: true, errorMessage: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {
      username: usernameInput,
      password: passwordInput,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response.ok)
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  renderUsername = () => {
    const {usernameInput} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="input"
          value={usernameInput}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {passwordInput} = this.state

    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className="input"
          value={passwordInput}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {submitError, errorMessage} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="tasty-container">
        <div className="from-bg-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://res.cloudinary.com/sree7771/image/upload/v1658312644/Frame_274_tph3zo.png"
              alt="website logo"
              className="tasty-kitchen-img"
            />
            <h1 className="tasty-kitchens-heading">Tasty Kitchens</h1>
            <h1 className="login-heading"> Login </h1>

            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container"> {this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {submitError && <p className="error-message">*{errorMessage}</p>}
          </form>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sree7771/image/upload/v1658313468/Rectangle_1456_2_fh4w0q.png"
            alt="website login"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
