import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/* import and wrap the StyledEngineProvider around the component https://mui.com/material-ui/guides/interoperability/#css-injection-order */
import { StyledEngineProvider } from "@mui/material/styles";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import ProjectGallery from "../Project-Gallery/ProjectGallery";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const linksArray = ["Packages", "Projects", "Contact", "CV/Resume", "About Me"];
export default function Home() {
  return (
<StyledEngineProvider injectFirst>
        <Router>
          <div className="App">
            <Header links={linksArray} />
            <Hero />
            <ProjectGallery />
            <Routes>
              <Route exact path="/" component={Home} />
              {/* <Route path="/packages" component={packages} /> */}
              <Route exact path="/projects" component={ProjectGallery} />
              <Route path="/projects/:id" component={Project} />
              <Route path="/contact" component={Contact} />
            </Routes>
          </div>
        </Router>
      </StyledEngineProvider>  )
}
