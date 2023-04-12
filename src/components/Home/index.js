// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="Home-container-center">
    <Header />
    <div className="Home-container">
      <div className="container2-home">
        <h1 className="heading-style-home">Clothes That Get YOU Noticed</h1>
        <p className="para-style-home">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <div className="">
          <button className="button-home-style" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="img-size-home"
      />
    </div>
  </div>
)
export default Home
