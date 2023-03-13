import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
/* import and wrap the StyledEngineProvider around the component https://mui.com/material-ui/guides/interoperability/#css-injection-order */
import { StyledEngineProvider } from '@mui/material/styles';
import Header from '../Header/Header';
import Home from '../Home/Home';
import ProjectGallery from '../Project-Gallery/ProjectGallery';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

export default function App() {
  return (
   <>
     <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
   </>
  )
}
