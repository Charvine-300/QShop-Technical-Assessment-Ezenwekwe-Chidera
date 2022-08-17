import 'animate.css'
import 'bulma/css/bulma.min.css'
import React, { Component } from 'react'
import Logo from '../assets/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    open: faBars,
    dropdown: '',
    animation: '',
    menuItems: [
      {link: '/', text: 'Home'},
      {link: '/electronics', text: 'Electronics'},
      {link: '/jewelery', text: 'Jewelery'},
      {link: '/men', text: 'Men\'s Clothing'},
      {link: '/women', text: 'Women\'s Clothing'},
      {link: '/cart', text: 'Cart'},
    ],
    desktopMenu: [],
  };

  openToggle = () => {
    if (this.state.open === faBars) {
      this.setState({open: faClose, dropdown: 'open', animation: 'animate__fadeInDownBig'});
    }

    else {
      this.setState({open: faBars, animation: 'animate__fadeOutUpBig'});
    }
  }

  componentDidMount() {
    //Filtering through menuItems to remove cart menu item for desktop view
    const desktopList = this.state.menuItems.filter(item => item.text !== 'Cart');
    this.setState({desktopMenu: desktopList});
  }


  render() {
    return (
      <>
        <div className="navbar py-2 fixed">
          <nav className="navbar width" id='holder'>
            <div 
              className="navbar-burger py-4 px-4 mb-5 black"
              aria-controls='dropdown-menu'
              aria-haspopup="true"
              onClick={this.openToggle}>
              <FontAwesomeIcon icon={this.state.open} inverse size='xl' />
            </div> 
            <aside className={`menu ${this.state.dropdown} animate__animated ${this.state.animation}`}>
              <ul className="menu-list">
                {this.state.menuItems.map(item => (
                  <li 
                    key={item.link} 
                    className="pl-3 has-text-left is-size-6"
                    onClick={() => this.setState({animation: 'animate__fadeOutUpBig', open: faBars})}
                  >
                    <Link to={item.link}>  
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="navbar-brand center">
              <a className="navbar-item">
                <img src={Logo} alt="logo" className='py-2 px-2 logo-size' />
              </a>
            </div>

            <div className="navbar-menu remove" id='nav-links'>
              <div id='no-margin' className="navbar-start container">
                {this.state.desktopMenu.map(item => (
                  <li key={item.link} className="navbar-item is-size-7 is-uppercase"> 
                    <Link to={item.link}>
                     {item.text}
                    </Link>
                  </li>
                ))}
              </div>
            </div>

            <div className="navbar-end navbar-menu" id='go-cart'>
              <Link to='/cart'> 
                <FontAwesomeIcon icon={faShoppingCart} size='2xl' />
              </Link>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
 