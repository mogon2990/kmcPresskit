import React, { Component } from 'react'
import { Arrows } from './index.js'

const CompanyHistory = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Company History</h2>
            </div>
            <div className='seperator'></div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/CH-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CH-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CH-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CH-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
            <p>Winner of the 2018 NY Dance and Performance “Bessie” Jury Award, Kyle Marshall Choreography (KMC) is a company that sees the dancing body as a container of history, an igniter of social reform and a site of celebration. KMC believes the creation, sharing and teaching of dance as a way to deepen our knowledge of who we are as individuals, how we develop relationships and ultimately societies. </p>
            <p>Since its inception in 2014, KMC has performed at venues including: Jacob’s Pillow Dance Festival, Joe’s Pub at the Public Theater, Roulette, Actors Fund Arts Center, NYC Summerstage, Wassaic Arts Project and Conduit Dance in Portland, OR. Commissions have included: "Dance on the Lawn" Montclair Dance Festival, New Jersey Performing Arts Center, and Harlem Stage. KMC is a part of the MANA Contemporary Performance Residency Program and was a 2018 CHIRP resident artist at County Prep High School in Jersey City. Additionally, KMC has received residencies from Center of Performance Research, DanceNow/Silo, Jamaica Performing Arts Center and CoLab Arts. </p>
            <Arrows left={{show: false, path: ''}} right={{show:true, path: '/artisticdirector'}} />
        </div>
    )
}

export default CompanyHistory
