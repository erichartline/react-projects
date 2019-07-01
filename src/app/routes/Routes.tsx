import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Homepage from "features/Homepage/Homepage"
import Timer from "features/TimerWithHooks/Timer"

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/timer-with-hooks" component={Timer} />
    </Switch>
  </Router>
)

export default Routes
