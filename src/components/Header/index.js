import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="header-card">
      <div className="next-wave-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="nxt-wave-image"
          alt="wave"
        />
        <p className="next-wave-para">Wave</p>
      </div>
      <ul className="header-item-card">
        <li>
          <Link to="/" className="link-element">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link-element">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link-element">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Header
