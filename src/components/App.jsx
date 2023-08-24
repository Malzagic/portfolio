import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Wrapper from '../shared/components/UX/containers/Wrapper';
import Navigation from '../shared/components/navigation/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/resume' element={<Resume />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
