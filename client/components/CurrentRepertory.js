import React, { Component } from 'react'
import { Arrows } from './index.js'

const CurrentRepertory = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Current Repertory</h2>
            </div>
            <div className='seperator'></div>
            <h3 className='sub-title'>A.D.</h3>
            {/* <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/CR-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div> */}
            <p><i>A.D.</i> is the beginning of a conversation examining Christianity’s influence on the body. Using the <i>Holy Bible</i> as impetus for text, narrative and imagery, this work seeks to show old and new ways to uplift the spirit and challenge mainstream white supremacist depictions of celestial beings. </p>
            <div className='dance-credits'>
              <p><strong>Choreography:</strong> Kyle Marshall</p>
              <p><strong>Performers:</strong> Oluwadamilare (Dare) Ayorinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson</p>
              <p><strong>Music and Interactive Sound Instrument:</strong> Cal Fish</p>
              <p><strong>Text:</strong>  Holy Bible (New International Version)</p>
              <p><strong>Costume Construction:</strong> Arielle Davidoff</p>
              <p><strong>Lighting Design:</strong> Amanda K. Ringger</p>
            </div>
            <p><i>A.D. was commissioned by BAM with generous support of the following Institutions: Marlin Miller Dance Residency Program and Integrated Electronic Arts at Alfred University, Bethany Arts Community, The Harkness Foundation for Dance, MANA Contemporary Performance Residency Program, 92nd St Y Artist-in- Residence Program, Norte Maar’s Dance at Socrates Sculpture Park  Residency, CHIRP - County Prep High School Residency Program, Actors Fund Arts Center and DanceforceNY.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Horizon</h3>
            {/* <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/CR-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div> */}
            <p>Two beings in space drift towards a formalist future.</p>
            <div className='dance-credits'>
              <p><strong>Choreography:</strong> Kyle Marshall</p>
              <p><strong>Performers:</strong> Kyle Marshall and Miriam Gabriel</p>
              <p><strong>Sound:</strong> Recordings of shortwave numbers stations</p>
              <p><strong>Costumes:</strong> Gabby Grywalski</p>
            </div>
            <p><i>Horizon was supported by a residency at the Morris Museum. Horizon will premiere January 2020.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Colored</h3>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/CR-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CR-L.jpg" alt="Three dancers in Colored by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
            <p>Colored navigates the beautifully twisted spectrum of blackness that dancers Dare Ayorinde, Kyle Marshall and Myssi Robinson regularly embody. As three black dancers from varied backgrounds who work primarily with white artists, their work together in the studio leads to conversations on tokenism, appropriation, stereotype and representation. Colored is a filter for these thoughts and a celebration of cultural variation. This work features original music by Matt Clegg and was commissioned in-part by "Dance on the Lawn" Montclair Dance Festival, EMoves: Harlem Stage, and Jersey (New) Moves at NJPAC.</p>
            <div className='dance-credits'>
              <p><strong>Choreography:</strong> Kyle Marshall</p>
              <p><strong>Performers:</strong> Oluwadamilare “Dare” Ayorinde, Kyle Marshall and Myssi Robinson</p>
              <p><strong>Music and Light Sculpture:</strong> M. Clegg</p>
              <p><strong>Runtime:</strong> 40 minutes</p>
            </div>
            <p><i>Colored premiered June, 2017 at the Actors Fund Arts Center
            in Brooklyn, NY.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>King</h3>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/CR2-S.jpg 275w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR2-M.jpg 471w,
                    https://s3.amazonaws.com/kmc-presskit-photos/CR2-L.jpg 786w"
                    sizes="(max-width: 599px) 75vw,
                            (max-width: 800px) 55vw,
                            35vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/CR2-L.jpg" alt="Kyle Marshall in King by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: Steven Speliotis</p>
            </div>
            <p><i>King</i> uses Martin Luther King Jr.’s final speech, <i>I’ve Been to the Mountaintop,</i> as a soundscore. The speech encompassed the Memphis Sanitation Strike, economic inequality, black power and prophesied his death the following day. This solo admires how ideas, words, and actions can instigate revolution. It considers the effort and willing struggle of one body in order to create better future.</p>
            <div className='dance-credits'>
                <p><strong>Choreography and Performer:</strong> Kyle Marshall</p>
                <p><strong>Text:</strong> <i>I’ve Been to the Mountaintop</i> April 3rd, 1968 by Dr. Martin Luther King Jr.</p>
                <p><strong>Costume:</strong> Meagan Woods</p>
                <p><strong>Runtime:</strong> 8 minutes</p>
            </div>
            <p><i>King was commissioned and premiered at Harlem Stage for an event commemorate the 50th anniversary of MLK’s assassination.</i></p>
            <Arrows left={{show: true, path: '/pastengagements'}} right={{show:true, path: '/workinprogress'}} />
        </div>
    )
}

export default CurrentRepertory
