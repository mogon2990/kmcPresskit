import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { Navbar,
         CompanyHistory,
         ArtisticDirector,
         AwardsCommissionsandResidencies,
         CollaboratorBiographies,
         PastEngagements,
         WorkInProgress,
         CurrentRepertory,
         PastWorks,
         Connect } from './components'

class Main extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/history" component={CompanyHistory} />
                    <Route path='/artisticdirector' component={ArtisticDirector} />
                    <Route path='/awards' component={AwardsCommissionsandResidencies} />
                    <Route path='/biographies' component={CollaboratorBiographies} />
                    <Route path='/pastengagements' component={PastEngagements} />
                    <Route path='/workinprogress' component={WorkInProgress} />
                    <Route path='/currentrepertory' component={CurrentRepertory} />
                    <Route path='/pastworks' component={PastWorks} />
                    <Route path='/connect' component={Connect} />
                    <Route component={CompanyHistory} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Main)
