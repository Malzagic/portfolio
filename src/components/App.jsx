import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactGA from 'react-ga';
import Wrapper from "../shared/components/UI/containers/Wrapper";
import Navigation from "../shared/components/navigation/Navigation";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
import { Oval } from "react-loader-spinner";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Portfolio = React.lazy(() => import("./pages/Portfolio"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const TRACKING_ID = process.env.REACT_APP_GTAG_KEY; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Navigation />
          <Suspense
            fallback={
              <div className="center">
                <Oval
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass="card-loader"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#000"
                  strokeWidth={3}
                  strokeWidthSecondary={3}
                />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

export default App;
