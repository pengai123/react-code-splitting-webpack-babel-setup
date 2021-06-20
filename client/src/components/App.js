import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Home"))
const Contact = React.lazy(() => import("./Contact"))

export default function app() {
  return (

    <div className="app">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <Router>
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  )
}
