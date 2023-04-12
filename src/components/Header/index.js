// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-img-size"
        />
        <ul className="ul-style-header">
          <li className="">
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li className="">
            <Link className="link-style" to="/product">
              Products
            </Link>
          </li>
          <li className="">
            <Link className="link-style" to="/cart">
              Cart
            </Link>
          </li>
          <button className="button-home-style-header" type="button">
            Logout
          </button>
        </ul>
      </div>
    )
  }
}
export default Header
