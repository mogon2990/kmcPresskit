import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ReactSVG from 'react-svg'
import './Navbar.css'

export default class Navbar extends Component {
  constructor() {
      super()
      this.state = {
        isSmallScreen: true,
        isOpen: true,
      }
      this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount() {
    console.log(window.visualViewport)
    window.visualViewport.width > 800 && this.setState({ isSmallScreen: false})
  }

  toggleNavbar() {
    this.setState({ isOpen: !this.state.isOpen})
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
          {isOpen &&
              <div className='nav-links'>
                  <NavLink onClick={toggleNavbar} to='/history'>Company History</NavLink>
                  <NavLink onClick={toggleNavbar} to='/artisticdirector'>Artistic Director</NavLink>
                  <NavLink onClick={toggleNavbar} to='/awards'>Awards, Commissions, and Residencies</NavLink>
                  <NavLink onClick={toggleNavbar} to='/biographies'>Company Biographies</NavLink>
                  <NavLink onClick={toggleNavbar} to='/pastengagements'>Past Engagements</NavLink>
                  <NavLink onClick={toggleNavbar} to='/workinprogress'>Work in Progress</NavLink>
                  <NavLink onClick={toggleNavbar} to='/currentrepertory'>Current Repertory</NavLink>
                  <NavLink onClick={toggleNavbar} to='/pastworks'>Past Works</NavLink>
                  <NavLink onClick={toggleNavbar} to='/connect'>Connect</NavLink>
              </div>
          }
      </div>
    )
  }
}
