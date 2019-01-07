import React, { Component } from 'react'
import { Arrows } from './index.js'

const PastWorks = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Past Works</h2>
            </div>
            <div className='seperator'></div>
            <h3 className='sub-title'>Wage</h3>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/PW-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PW-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PW-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/PW-L.jpg" alt="Four dancers in Wage by Kyle Marshall Choreography" />
                <p className='photo-credit'>Photo: David Gonsier</p>
            </div>
            <p>Danced by Dare Ayorinde, Miriam Gabriel, Nick Sciscione, and Myssi Robinson, <i>Wage</i> exposes white supremacy and capitalism wound within our American bodies. This country was discovered by venture capitalists and radical religious thinkers. Our economic strength is powered by a battery of 250 years of slave labor. Our American bodies are both victims and perpetrators of this weighted cycle. <i>Wage</i> moves us through these patterns of our dark history to unveil American truth. The dance has original music by Jon Johnson and a lobby installation by visual artist and dancer Myssi Robinson.</p>
            <div className='dance-credits'>
                <p><strong>Choreography:</strong> Kyle Marshall</p>
                <p><strong>Performers:</strong> Oluwadamilare “Dare” Ayroinde, Miriam Gabriel, Myssi Robinson and Nick Sciscione</p>
                <p><strong>Visual Installation:</strong> Myssi Robinson</p>
                <p><strong>Music:</strong> Jon Johnson</p>
                <p><strong>Runtime:</strong> 35 minutes</p>
            </div>
            <p><i>Wage was supported by residencies at the Wythe Hotel, Dancenow Kirkland Farm, the Andrew W. Mellon Artist-in-Residence Program at CPR, a Mertz Gilmore Late Stage Stipend and a space subsidy at the Mark Morris Dance Center.  Wage premiered at the Center for Performance Research in Brooklyn May, 2018</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Roam</h3>
            <div className='img-container'>
                <img srcSet="https://s3.amazonaws.com/kmc-presskit-photos/PW2-S.jpg 350w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PW2-M.jpg 600w,
                    https://s3.amazonaws.com/kmc-presskit-photos/PW2-L.jpg 1000w"
                    sizes="(max-width: 599px) 90vw,
                            (max-width: 800px) 70vw,
                            50vw"
                    src="https://s3.amazonaws.com/kmc-presskit-photos/PW2-L.jpg" alt="Five dancers in Roam by Kyle Marshall Choreography at Jacob's Pillow" />
                <p className='photo-credit'>Photo: Hayim Heron courtesy of Jacob's Pillow Dance</p>
            </div>
            <p>Writer and New York City activist Jane Jacobs wrote that old cities are "all composed of movement and change, and although it is life, not art, we may fancifully call it the art form of the city and liken it to the dance." <i>Roam</i> is a work for five dancers inspired by urban planning that highlights the ways people are physically organized, emotionally affected, and socially structured by the city environments we build. New York based composer Tristan Perich’s architecturally dense music incorporates piano and electronic sounds, evoking images of smooth glass, tall structures, hard pavement, and waves of people etching their ways through the space.</p>
            <div className='dance-credits'>
                <p><strong>Choreography:</strong> Kyle Marshall</p>
                <p><strong>Performers:</strong> Miriam Gabriel, Monica Gonzalez, Kyle Marshall, Myssi Robinson, and Nick Sciscione</p>
                <p><strong>Music:</strong> Tristan Perich</p>
                <p><strong>Runtime:</strong> 12 minutes</p>
            </div>
            <p><i>Development of this piece has been made possible by a 2015 New Stage Creative Residency at the Jamaica Performing Arts Center. Roam premiered April, 2016 at Green Space in Long Island City, NY.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Soundboard</h3>
            <p><i>“The New Yorker is the real deal, a young choreographer and with Soundboard he has made a solo for himself that is at once lean and expansive.”</i><br/> - Martha Ullman West - Oregon Artswatch</p>
            <div className='dance-credits'>
                <p><strong>Choreography and Performer:</strong> Kyle Marshall</p>
                <p><strong>Music:</strong> Jody Redhage and Allen Ginsberg</p>
                <p><strong>Costume:</strong> Meagan Woods</p>
                <p><strong>Runtime:</strong> 12 minutes</p>
            </div>
            <p><i>Soundboard premiered at the Dance+ Festival at Conduit, Portland, OR.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Lift</h3>
            <p>From gun violence to arts education, the body is the front line of social justice movements. Co-commissioned by Harlem Stage and the Museum of Art and Design, <i>Lift</i> responds to ten original poster representing the physical and important work being done by ten New York City-based social justice organizations. Both the dance and posters were apart of the AMPL!FY exhibition at the Museum of Art and Design.</p>
            <div className='dance-credits'>
                <p><strong>Choreography</strong>: Kyle Marshall</p>
                <p><strong>Performers:</strong> Bria Bacon, Myssi Robinson, and Nick Sciscione</p>
                <p><strong>Music:</strong> Bob Marley</p>
            </div>
            <p><i>Lift premiered December, 2017 at the Museum of Art and Design.</i></p>
            <div className='seperator'></div>
            <h3 className='sub-title'>Penny the Proletariat</h3>
            <p><i>Penny the Proletariat</i> is a dance/theater work set to the music and lyrics of <i>Threepenny Opera</i> by Bertolt Brecht and Kurt Weill. The work plays with themes referred to in the iconic operetta: poverty, feminism, and socialism.</p>
            <div className='dance-credits'>
              <p><strong>Choreography:</strong> Kyle Marshall</p>
              <p><strong>Performers:</strong> Molly Galbraith, Sarah Lifson, Kelli McGovern, Morgan Preston and Meagan Woods</p>
              <p><strong>Music:</strong> Kurt Weill lyrics by Bertolt Brecht</p>
              <p><strong>Costumes:</strong> Meagan Woods</p>
            </div>
            <p><i>Penny the Proletariat premiered March, 2014 at The Landmark Loew’s Theater.</i></p>
            <Arrows left={{show: true, path: '/currentrepertory'}} right={{show:true, path:       '/connect'}} />
        </div>
    )
}

export default PastWorks
