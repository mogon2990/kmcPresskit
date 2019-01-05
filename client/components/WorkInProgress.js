import React, { Component } from 'react'
// import './components.css'

function WorkInProgress(props) {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Work-in-Progress</h2>
            </div>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/WiP-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/WiP-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/WiP-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 90vw,
                            90vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/WiP-L.jpg" alt="Five dancers in Reign by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: Miguel Aviles</p>
            </div>
            <h3>Reign (2020)</h3>
            <p>Premiering in summer 2020, Reign will be an evening length work shrouded in Christianity’s influence on the body, and American culture. Using text from Holy Bible as impetus, dancers Oluwadamilare Ayroinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson along with sound designer Cal Fish, are in a process to understand how words and belief have the power to influence bodies, communities and nations. With this dance, we seek to undoing mainstream white supremist depictions of celestial beings, embody old and new ways of uplifting the spirit, and release guilt from our queer bodies. Reign is interested in how a theater can become a sanctuary, an audience a congregation, as we create a space for reflection, truth and joy in an age of unbelief.</p>
            <p>Choreography: Kyle Marshall</p>
            <p>Performers: Oluwadamilare Ayorinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson</p>
            <p>Text: Holy Bible</p>
            <p>Sound Design: Cal Fish</p>
        </div>
    )
}

export default WorkInProgress
