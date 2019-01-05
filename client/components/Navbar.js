import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import ReactSVG from 'react-svg'
import './Navbar.css'

const PATHS = [{path: '/history', text: 'Company History'},
               {path:'/artisticdirector', text: 'Artistic Director'},
               {path: '/awards', text: 'Awards, Commissions, and Residencies'},
               {path: '/biographies', text: 'Company Biographies'},
               {path: '/pastengagements', text: 'Past Engagements'},
               {path: '/workinprogress', text: 'Work in Progress'},
               {path: '/currentrepertory', text: 'Current Repertory'},
               {path: '/pastworks', text: 'Past Works'},
               {path: '/connect', text: 'Connect'}]

export default class Navbar extends Component {
  constructor() {
      super()
      this.state = {
        isSmallScreen: true,
        isOpen: false,
      }
      this.toggleNavbar = this.toggleNavbar.bind(this)
      this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount() {
    window.outerWidth < 800
    ? this.setState( { isSmallScreen: true} )
    : this.setState( { isSmallScreen: false, isOpen: true })
  }

  toggleNavbar() {
    if (this.state.isOpen) {
      document.removeEventListener('click', this.handleOutsideClick)
    } else {
      document.addEventListener('click', this.handleOutsideClick)
    }
    this.setState({ isOpen: !this.state.isOpen})
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return
    }
      this.toggleNavbar()

  }

  render() {
    let { isSmallScreen, isOpen } = this.state
    let { toggleNavbar } = this
    return (
      <div className='navbar-container'>
          {isSmallScreen &&
              <div className='sm-nav-top'>
                  <ReactSVG
                      svgClassName='menu-icon'
                      src={isOpen ? './letter-x-light.svg' : './menu-light.svg'}
                      onClick={toggleNavbar}/>
                  <h1 className='sm-nav-title'>Kyle Marshall Choreography</h1>
              </div>
          }
          {/* {isOpen &&
              <div className='nav-links-container'  ref={node => { this.node = node }}>
                  {PATHS.map(info => {
                    return <NavLink className='nav-link'
                                    activeClassName='active'
                                    // onClick={toggleNavbar}
                                    to={info.path}
                                    key={info.path}>{info.text}</NavLink>
                  })}
              </div>
          } */}
          <CSSTransition
              in={this.state.isOpen}
              timeout={100}
              classNames='nav-links-container'
              mountOnEnter
              unmountOnExit
              appear={true}
              >
              <div className='nav-links-container'  ref={node => { this.node = node }}>
                  {PATHS.map(info => {
                    return <NavLink className='nav-link'
                                    activeClassName='active'
                                    // onClick={toggleNavbar}
                                    to={info.path}
                                    key={info.path}>{info.text}</NavLink>
                  })}
              </div>
          </CSSTransition>
      </div>
    )
  }
}
