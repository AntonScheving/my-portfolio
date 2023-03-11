import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ProjectGallery from './ProjectGallery';
import Project from './Project';
import Contact from './Contact';

export default function App() {
  return (
   <>
   <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectGallery} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
   
   </>
  )
}
