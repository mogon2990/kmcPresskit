import React, { Component } from 'react'
import { CompanyHistory } from './components'

export default class Main extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>Main</p>
                <CompanyHistory />
            </div>
        )
    }
}