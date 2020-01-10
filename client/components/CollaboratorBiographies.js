import React, { Component } from 'react'
import { Arrows } from './index.js'

const CollaboratorBiographies = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Collaborator Biographies</h2>
            </div>
            <div className='seperator'></div>
            <h3>Oluwadamilare (Dare) Ayorinde</h3>
            <p>is a Nigerian - North American freelance creating dance artist living in New Jersey. Since Rutgers University he has worked with Colleen Thomas, Bill Young, Netta Yerushalmy, Company Stefanie Batten Bland, Kayla Farrish, Douglas Dunn, Anne Teresa De Keersmaeker for a broadway lab, The Trisha Brown Dance Company and his dear friends Kyle Marshall Choreography and Miriam Gabriel + Carlo Antonio Villanueva. He has presented work at Smush Gallery, Morristown Museum, Stuffed Arts and Movement Research Monday’s at Judson. This year Oluwadamilare is Dance on the Lawn's fifth Emerging Commissioned New Jersey Choreographer.</p>
            <div className='seperator'></div>
            <h3>Bria Symoné Bacon</h3>
            <p>is a New Jersey native and a multi-disciplinary artist currently exploring performance, poetry, and styling. She has worked with the Stephen Petronio Company, Parijat Desai, Marielis Garcia, and Netta Yerushalmy. She is a 2017 graduate of Rutgers University (Mason Gross School of the Arts), and will return to complete her masters’ degree in Dance Education. Bacon is elated to be performing with KMC in the 2019 BAM Next Wave Festival.</p>
            <div className='seperator'></div>
            <h3>Miriam (mimi) Gabriel</h3>
            <p>is a performer and creator. She co-creates video work with Zora Schiltz-Rouse and Sophia de Baun under Mizo Productions. She has made dance work with Carlo Antonio Villanueva. She is currently involved in dance projects with Kyle Marshall Choreography, Maya Lee-Parritz, and Stephanie Acosta. Past projects include working with the Stephen Petronio Company, Merce Cunningham Trust and performing for GREYZONE, Zultari Gomez, Lisa Fagan, Sarah Lifson and Kayla Farrish. She is in Carlos Cardona's and Sophia De Baun's Feature Film Scenes from a Breakup and Dan Rosen's short film, Squeezed. She is a graduate of Rutgers University and works around New Jersey and New York as a domestic worker and food server. Stay updated on her projects and work at miriamgabriel.com.</p>
            <div className='seperator'></div>
            <h3>Myssi Robinson</h3>
            <p>is an artist from Richmond, VA.  Home is currently Jersey City and the movement worlds of David Dorfman Dance, Kyle Marshall Choreography, and the ColemanCollective. Since graduating from Mason Gross School of the Arts at Rutgers University with a BFA in Dance, Myssi has maintained a visual art practice of marking, design, and simple construction.  Her work has been presented by Mana Contemporary, the Jersey City Theater Center, the Gallery at Nimbus Dance Works, BAAD! and the Bronx Museum of the Arts. Myssi's next interdisciplinary solo show will live at Smush Gallery in March 2020. In all the working, empathy is queen.</p>
            <div className='seperator'></div>
            <div className='title-container'>
                <h2>Production Collaborators</h2>
            </div>
            <div className='seperator'></div>
            <h3>Cal Fish (sound design and sound instrument construction)</h3>
            <p>is a multi-disciplinary artist from Sea Cliff NY currently based in Brooklyn. They graduated from Bard College with a joint degree in studio art and music. Since graduation they have shared interactive works and multi-sensory performances at galleries, diy venues, festivals, community art spaces, and public parks, including; CANADA Gallery, Governor’s Island, Flux Factory, and Peace Park. Sound as a medium for communication and user-friendly kinesthetic technologies have remained at the center of Cal’s work. They have toured extensively with various music and art projects in the U.S. and have also performed in Europe and Canada. Cal currently hosts a radio show called Anthroapology, organizes interdisciplinary art events, makes clothes out of their studio at the Living Gallery, and works in collaboration with many amazingly inspiring artists and organizers. IG:@cal._.fish</p>
            <Arrows left={{show: true, path: '/artisticdirector'}} right={{show:true, path: '/awards'}} />
        </div>
    )
}

export default CollaboratorBiographies
