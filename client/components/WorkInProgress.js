import React, { Component } from 'react'
import { Arrows } from './index.js'

const WorkInProgress = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Work-in-Progress</h2>
            </div>
            <div className='seperator'></div>
            <h3 className='sub-title'>Reign (2020)</h3>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/WiP-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/WiP-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/WiP-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/WiP-L.jpg" alt="Five dancers in Reign by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: Miguel Aviles</p>
            </div>
            <p>Concluding the exploration of Christianity, <i>Reign</i> is an evening length work interested in how a theater can become a sanctuary and an audience a congregation, as we create a space for reflection, truth, and joy in an unbelievable age. <i>Reign</i> will premiere at The Shed August 3-6th 2020.</p>
            <div className='dance-credits'>
                <p><strong>Choreography:</strong> Kyle Marshall</p>
                <p><strong>Performers:</strong> Oluwadamilare "Dare" Ayorinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson</p>
                <p><strong>Text:</strong> Holy Bible</p>
                <p><strong>Sound Design:</strong> Cal Fish</p>
            </div>
            <Arrows left={{show: true, path: '/currentrepertory'}} right={{show:true, path: '/pastworks'}} />
        </div>
    )
}

export default WorkInProgress
