import React, { Component } from 'react'
import './components.css'

function CompanyHistory(props) {
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
                            (max-width: 800px) 90vw,
                            90vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CH-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
            <p>Winner of the 2018 NY Dance and Performance Juried “Bessie” Award and named “New to Watch” by Dance Europe Magazine in 2017, Kyle Marshall Choreography (KMC) is a dance company that sees the moving body as a container of history, an igniter of social reform and a site of celebration. KMC believes the creation, sharing, and teaching of dance is a way to deepen our knowledge of who we are as individuals and how we develop relationships and ultimately societies.</p>
            <p>Since 2014, Kyle Marshall Choreography has performed at venues across the United States including Jacob’s Pillow Dance Festival, Joe’s Pub at the Public Theater, Actors Fund Arts Center, New Jersey Performing Arts Center, Harlem Stage, Judson Church, NYC Summerstage, “Dance on the Lawn” Montclair Dance Festival, Roulette, Jersey City Theater Center, Wassaic Arts Project and Conduit Dance in Portland, OR.</p>
            <p>Educational Outreach is a vital branch of Kyle Marshall Choreography. The company has conducted education outreaches at County Prep High School, Bayonne High School and Trenton Central High School in New Jersey. The company has also guest lectured at DeSales University, Muhlenberg College, Montclair University and Basin Arts in Lafayette, Louisiana. </p>
        </div>
    )
}

export default CompanyHistory
