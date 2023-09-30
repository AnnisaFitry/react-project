import RandomNumberButton from '../Button/RandomNumberButton'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom box-shadow fixed-top">
            <div className="container">
            <Link to={'/'}>
              <a className="navbar-brand">
                Simple Header
              </a>
            </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-home"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-features-tab"
                      data-toggle="pill"
                      href="#pills-features"
                      role="tab"
                      aria-controls="pills-features"
                      aria-selected="false"
                    >
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-pricing-tab"
                      data-toggle="pill"
                      href="#pills-pricing"
                      role="tab"
                      aria-controls="pills-pricing"
                      aria-selected="false"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-faq-tab"
                      data-toggle="pill"
                      href="#pills-faq"
                      role="tab"
                      aria-controls="pills-faq"
                      aria-selected="false"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-about-tab"
                      data-toggle="pill"
                      href="#pills-about"
                      role="tab"
                      aria-controls="pills-about"
                      aria-selected="false"
                    >
                      About
                    </a>
                  </li>
                </ul>
                {/* <RandomNumberButton /> */}
                <Link to={'/create-account'}>
                <a className='btn btn-outline-primary'>Create Account</a>
                </Link>
              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header