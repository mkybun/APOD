import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';

class Routes extends Component {
  render() {
    return (
      <div> 
          <Switch>
          <Route path="/home" component={Home} />
          <Route path='/' exact component={Home} />
          </Switch>
      </div>
    )
  }
}


export default withRouter(Routes)