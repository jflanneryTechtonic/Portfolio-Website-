import React from 'react';
import LandingPage from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import { Route, Switch} from 'react-router-dom'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Projects" component={Projects} />
  </Switch>
)

export default Main;