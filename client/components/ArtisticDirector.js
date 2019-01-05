import React, { Component } from 'react'
// import './components.css'

function ArtisticDirector(props) {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Artistic Director</h2>
            </div>
            <div className='seperator'></div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/AD-S.jpg 234w,
                    https://s3.amazonaws.com/kmc-presskit-photos/AD-M.jpg 402w,
                    https://s3.amazonaws.com/kmc-presskit-photos/AD-L.jpg 669w"
                    sizes="(max-width: 599px) 75vw,
                            (max-width: 800px) 75vw,
                            75vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/AD-L.jpg" alt="Kyle Marshall, the artistic director of Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: Norbert De La Cruz III</p>
            </div>
            <p>“For exploring important ideas around race and sexuality in dances that embody rather than illustrate complicated issues. For drawing on a variety of movement styles to create technically accomplished, witty, and immensely engaging choreography.”<br />
              -2018 Juried Bessie Award caption</p>
            <p>Kyle Marshall is a 2017 NJ State Council of the Arts Choreography Fellow. He currently dances with the Trisha Brown Dance Company and doug elkins choreography etc. He has had the pleasure of working with artists including; Tiffany Mills, Ryan McNamara, Heidi Latsky, and was a founding member of 10 Hairy Legs. Kyle assisted choreographer David Neumann the musical The Total Bent at the Public Theater and was the 2016 “Dance on the Lawn” Montclair Dance Festival Emerging Commissioned Choreographer. A New Jersey native, Kyle resides in Jersey City and graduate of Rutgers University with a BFA in Dance.</p>
        </div>
    )
}

export default ArtisticDirector
