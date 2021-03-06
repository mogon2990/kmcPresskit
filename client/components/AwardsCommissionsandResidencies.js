import React, { Component } from 'react'
import { Arrows } from './index.js'

const AwardsCommissionsandResidencies = props => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h2>Awards, Commissions, and Residencies</h2>
            </div>
            <div className='seperator'></div>
            <div className='list-medium'>
                <h3>2019</h3>
                <ul>
                    <li>Marlin Miller Dance Residency Program and Integrated Electronic Arts at Alfred University Bethany Arts Community</li>
                    <li>The Harkness Foundation for Dance Grant </li>
                    <li>MANA Contemporary Performance Residency Program</li>
                    <li>92nd St Y Artist-in-Residence</li>
                </ul>
                <h3>2018</h3>
                <ul>
                    <li>NY Dance and Performance Juried “Bessie” Award</li>
                    <li>CHIRP residency at County Prep High School</li>
                    <li>Norte Maar Dance at Socrates Residency</li>
                    <li>Artist-in-Residence at the Wythe Hotel</li>
                </ul>
                <h3>2017</h3>
                <ul>
                    <li>NJ State Council of the Arts Choreography Fellow</li>
                    <li>“New to Watch” by Dance Europe Magazine</li>
                    <li>Andrew W. Mellon Artist-in-Residence at CPR</li>
                </ul>
                <h3>2016</h3>
                <ul>
                    <li>“Dance on the Lawn” Montclair Dance Festival emerging commissioned choreographer</li>
                    <li>NJPAC’s Jersey (New) Move emerging commissioned choreographer</li>
                    <li>EMoves: Harlem Stage commission</li>
                </ul>
            </div>
            <Arrows left={{show: true, path: '/biographies'}} right={{show:true, path: '/pastengagements'}} />
        </div>
    )
}

export default AwardsCommissionsandResidencies
