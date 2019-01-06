import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import './components.css'

function Connect(props) {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Connect</h2>
            </div>
            <div className='seperator'></div>
            <div className='connect-container'>
              <p>Kyle Marshall</p>
              <p>kyleg.marshall@gmail.com</p>
              <p>(732) 207-1578</p>
              <div className='seperator'></div>
              <p>87 Palisade Ave. apt. 2</p>
              <p>Jersey City, NJ 07306</p>
              <div className='seperator'></div>
              <div className='connect-social-links'>
                <ReactSVG
                        svgClassName='connect-icon'
                        src='./profile.svg' />
                <a href='https://www.kmchoreo.com' target="_blank">kmchoreo.com</a>
              </div>
              <div className='connect-social-links'>
                <ReactSVG
                        svgClassName='connect-icon'
                        src='./facebook.svg' />
                <a href='https://www.facebook.com/kylemarshallchoreography' target="_blank">/kylemarshallchoreography</a>
              </div>
              <div className='connect-social-links'>
                <ReactSVG
                        svgClassName='connect-icon'
                        src='./instagram.svg' />
                <a href='https://www.instagram.com/kmchoreo' target="_blank">@kmchoreo</a>
              </div>
            </div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/C-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/C-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/C-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            90vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/C-L.jpg" alt="Two dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
        </div>
    )
}

export default Connect
