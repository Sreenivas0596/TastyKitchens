import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {userInput: '', passwordInput: ''}

  onChangeUsername = event => {
    this.setState({userInput: event.target.value})
  }

  renderUsername = () => {
    const {userInput} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="input"
          value={userInput}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {passwordInput} = this.state

    return (
      <>
        <label htmlFor="username" className="label">
          PASSWORD
        </label>
        <input
          id="username"
          type="password"
          className="input"
          value={passwordInput}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="tasty-container">
        <div className="from-bg-container">
          <form className="form-container">
            <img
              src="https://res.cloudinary.com/sree7771/image/upload/v1658312644/Frame_274_tph3zo.png"
              alt=""
              className="tasty-kitchen-img"
            />
            <h1 className="tasty-kitchens-heading">Tasty Kitchens</h1>
            <h1 className="login-heading"> Login </h1>

            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container"> {this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/sree7771/image/upload/v1658313468/Rectangle_1456_2_fh4w0q.png"
            alt=""
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LoginForm
