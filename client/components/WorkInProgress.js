import React, { Component } from 'react'
// import './components.css'

function WorkInProgress(props) {
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
            <p>Premiering in summer 2020, <i>Reign</i> will be an evening length work shrouded in Christianity’s influence on the body and on American culture. Using text from Holy Bible as impetus, dancers Oluwadamilare Ayroinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson, along with sound designer Cal Fish, are in a process to understand how words and belief have the power to influence bodies, communities, and nations. With this dance, we seek to undo mainstream white supremist depictions of celestial beings, embody old and new ways of uplifting the spirit, and release guilt from our queer bodies. <i>Reign</i> is interested in how a theater can become a sanctuary, an audience a congregation, as we create a space for reflection, truth, and joy in an age of unbelief.</p>
            <div className='dance-credits'>
                <p><strong>Choreography:</strong> Kyle Marshall</p>
                <p><strong>Performers:</strong> Oluwadamilare "Dare" Ayorinde, Bria Bacon, Miriam Gabriel, Kyle Marshall and Myssi Robinson</p>
                <p><strong>Text:</strong> Holy Bible</p>
                <p><strong>Sound Design:</strong> Cal Fish</p>
            </div>
        </div>
    )
}

export default WorkInProgress
