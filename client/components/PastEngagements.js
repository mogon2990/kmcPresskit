import React, { Component } from 'react'
import { Arrows } from './index.js'

const PastEngagements = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Past Engagements</h2>
            </div>
            <div className='seperator'></div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/PE-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PE-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PE-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/PE-L.jpg" alt="Five dancers in Roam by Kyle Marshall Choreography at Jacob's Pillow" />
                <p className='photo-credit'>Photo: Hayim Heron courtesy of Jacob's Pillow Dance</p>
            </div>
            <div className='list-medium'>
            <h3>2019</h3>
                <ul>
                    <li>New York Live Arts, Live Artery: NYC </li>
                    <li>DanceNow Silo Residency: PA</li>
                    <li>BRIC, Golden Motors (work in progress) - a music theater work in development: Brooklyn</li>
                    <li>Raritian Valley Community College, Social Justice Concert: NJ</li>
                    <li>MANA Contemporary, residency showing: Jersey City, NJ</li>
                    <li>Bickford Theater, residency showing: Morristown, NJ</li>
                    <li>American Dance Festival (ADF), movement workshop: NC</li>
                    <li>Hudson Hall, movement workshop: Hudson, NY</li>
                    <li>Jacob's Pillow Inside/Out: MA</li>
                    <li>Electronic Arts Institute/ Alfred University Residency: Alfred, NY</li>
                    <li>Bethany Arts Community Residency: Ossining, NY</li>
                    <li>Isabella Stewart Gardener Museum, Weekend Concert Series: MA</li>
                    <li>DANCENOW residency: Hellertown, PA</li>
                    <li>Hobart and William Smith College, performance: Geneva, NY</li>
                    <li>92nd St Y, Embodying Repertory masterclass: NYC</li>
                    <li>Brooklyn Academy of Music, Next Wave Festival: Brooklyn</li>
                </ul>
                <h3>2018</h3>
                <ul>
                    <li>100 Grand, showing: NYC</li>
                    <li>Gibney Dance Center, shared showing: NYC</li>
                    <li>Wythe Hotel, residency and performance: Brooklyn</li>
                    <li>Bloomfield College, Movement/ Text Workshop, NJ</li>
                    <li>Dancenow Residency: PA</li>
                    <li>DeSales University, Masterclass: PA</li>
                    <li>Lehigh Valley Charter School, Masterclass: PA</li>
                    <li>Muhlenberg College, Masterclass: PA</li>
                    <li>Montclair University, Dance Appreciation: NJ</li>
                    <li>Harlem Stage, Ascension- a Dr. MLK Jr. event: NYC</li>
                    <li>Roulette: Brooklyn</li>
                    <li>SoPAC, NJ Choreographer’s Showcase: NJ</li>
                    <li>Center for Performance Research: Brooklyn</li>
                    <li>Your Move Dance Festival, guest company: NJ</li>
                    <li>County Prep High School, CHIRP Residency and Performance: NJ</li>
                    <li>Bayonne High School, Teaching: NJ</li>
                </ul>
                <h3>2017</h3>
                <ul>
                    <li>Museum of Art and Design, AMPL!FY: NYC</li>
                    <li>Montclair Arts Festival: NJ</li>
                    <li>Movement Research at Judson Church: NYC</li>
                    <li>Arts Basin, Movement Workshop: Lafayette, LA</li>
                    <li>CPR’s POSH series: Brooklyn</li>
                    <li>Rutgers University, Dance Appreciation: NJ</li>
                    <li>Montclair University, Dance Appreciation: NJ</li>
                    <li>Joe’s Pub, Dancenow: NYC</li>
                    <li>Rutgers University, Summer Danceplus: NJ</li>
                    <li>NJPAC Jersey (New) Moves Festival: NJ</li>
                    <li>Actors Fund Arts Center: Brooklyn</li>
                    <li>Harlem Stage, EMoves: NYC</li>
                    <li>DeSales University, Movement Workshop: PA</li>
                    <li>Muhlenberg College, Movement Workshop: PA</li>
                    <li>Bayonne High School, Teaching: NJ</li>
                </ul>
                <h3>2016</h3>
                <ul>
                    <li>Triskelion Arts, Split Bill: Brooklyn</li>
                    <li>Jersey City Theater Center: NJ</li>
                    <li>Rutgers University, Dance Appreciation: NJ</li>
                    <li>Joe’s Pub, Dancenow: NYC</li>
                    <li>Alfa Gallery: NJ</li>
                    <li>Newark Riverfront Dance: NJ</li>
                    <li>Socrates Park, Dance at Socrates: Queens</li>
                    <li>NJPAC, Jersey (New) Moves Festival: NJ</li>
                    <li>Drew University, AUNTS: NJ</li>
                    <li>“Dance on the Lawn” Montclair Dance Festival: NJ</li>
                    <li>Wassaic Arts Project: NY</li>
                    <li>Greenspace, Split Bill: Long Island City</li>
                    <li>Jacob’s Pillow Inside/Out: MA</li>
                    <li>Bayonne High School, Teaching: NJ</li>
                    <li>Trenton Central High School, Teaching: NJ</li>
                </ul>
            </div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/PE2-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PE2-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PE2-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/PE2-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
            <Arrows left={{show: true, path: '/awards'}} right={{show:true, path:       '/currentrepertory'}} />
        </div>
    )
}

export default PastEngagements
