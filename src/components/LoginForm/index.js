// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errormessage: ''}

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  LoginFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.setState({errormessage: data.error_msg})
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {errormessage, username, password} = this.state
    return (
      <div className="container-main-login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="img-login-page"
        />
        <div className="login-form-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img-logo-login-page"
          />
          <form className="form-style" onSubmit={this.LoginFormSubmit}>
            <label className="label-style" htmlFor="username">
              USERNAME
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="inpyt-style"
              value={username}
              onChange={this.onChangeUserName}
            />
            <label className="label-style" htmlFor="password">
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="inpyt-style"
              value={password}
              onChange={this.onChangePassword}
            />
            <button className="button-login-form-style" type="submit">
              Login
            </button>
            <p className="errorMessage">{errormessage}</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
