import React from 'react'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'
import './components.css'

const Arrows = props => {
  return (
    <div className='arrow-container'>
        {props.left.show &&
            <Link to={props.left.path} >
                <ReactSVG svgClassName='arrow-icon' src='./arrow-left.svg' />
            </Link>
        }
        {props.right.show &&
            <Link to={props.right.path} >
                <ReactSVG svgClassName='arrow-icon' src='./arrow-right.svg' />
            </Link>
        }
    </div>
  )
}

export default Arrows
