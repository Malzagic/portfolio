import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Wrapper from './shared/components/UX/containers/Wrapper';
import Navigation from './shared/components/navigation/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


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
