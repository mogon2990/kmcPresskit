import React from 'react'
import { Arrows } from './index.js'

const ArtisticDirector = props => {
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
                            (max-width: 800px) 55vw,
                            35vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/AD-L.jpg" alt="Kyle Marshall, the artistic director of Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: Norbert De La Cruz III</p>
            </div>
            <p>“For exploring important ideas around race and sexuality in dances that embody rather than illustrate complicated issues. For drawing on a variety of movement styles to create technically accomplished, witty, and immensely engaging choreography.”<br />
              -2018 Juried Bessie Award caption</p>
            <p>Choreographer and dancer Kyle Marshall is a 2018 Juried Bessie Award winner and a NJ State Council on the Arts Fellow. His company, Kyle Marshall Choreography has performed at venues including: Jacob’s Pillow Inside/Out, Joe’s Pub at the Public, Actors Fund Arts Center, NJPAC, NYC Summerstage, Wassaic Arts Project, and Conduit Dance (PDX). Commissions have included: "Dance on the Lawn" Montclair's Dance Festival, NJPAC and Harlem Stage. Kyle has taught masterclass and creative workshops at the American Dance Festival, Montclair State University, County Prep High School and Muhlenberg College. Presently, Kyle dances with the Trisha Brown Dance Company and is a resident artist at the 92nd st. Y. He has also worked with doug elkins choreography etc., and Tiffany Mills Company. Kyle graduated from Rutgers University with a BFA in Dance and resides in Jersey City.</p>
            <Arrows left={{show: true, path: '/history'}} right={{show:true, path:       '/biographies'}} />
        </div>
    )
}

export default ArtisticDirector
