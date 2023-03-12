import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import ProjectGallery from '../Project-Gallery/ProjectGallery';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

export default function App() {
  return (
   <>
   <Router> 
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectGallery} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
   
   </>
  )
}
