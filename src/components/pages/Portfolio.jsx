import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";
import SectionTitle from "../../shared/components/UX/sectionTitles/SectionTitle";
import LinkButton from '../../shared/components/UX/buttons/LinkButton';
import { Oval } from 'react-loader-spinner';
import portfolio from '../../assets/github-projects/portfolio.png';
import feedbackUI from '../../assets/github-projects/Feedback-UI.png';
import githubFinder from '../../assets/github-projects/Github-Finder.png';
import reactWeatherApp from '../../assets/github-projects/ReactWeather-app.png';
import trackCalories from '../../assets/github-projects/Track_calories.png';
import NewslatterSignup from '../../assets/github-projects/Newslatter_Signup.png'

import './Portfolio.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
AOS.init();

const Portfolio = () => {
  const reposImg = [portfolio, feedbackUI, githubFinder, reactWeatherApp, trackCalories, NewslatterSignup];

  const [repositories, setRepositories] = useState([]);
  const [isClicked, setIsClicked] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);


  // FETCHING DATA FROM SERVER
  const fetchData = async () => {
    try {
      const url = `https://pmdev-api-ovh.onrender.com/portfolio`;
      const response = await axios.get(url);
      const data = response.data;

      setRepositories([...data])
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.message === 'Network Error') {
        toast.warn('Error server connection!')
      } else {
        toast.error('Something went wrong!')
      }
    }
  };

  const handleClick = (e) => {
    let repo;

    if(e.target.getAttribute("data-value")) {
      repo = e.target.getAttribute("data-value");
    }

    setIsActive(repo);
  }


  // WHEN IS DINAMICLY CHANGED
  useEffect(() => {
    fetchData()
    setLoading(true);
  }, [])

  return (
    <section className="portfolio">
      <Container>
        <SectionTitle title='Portfolio' />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        {/* Here we have cards with portfolio projects */}
        <div className="portfolio-cards" data-aos="fade-right">
          {repositories.map((item, index) => (
            <div key={index} className="card" onClick={e => handleClick(e)}>
              <h2
                data-value={item.name}
              >
                {
                  item.name.replace(/[^a-zA-Z0-9 ]/g, ' ').toUpperCase()
                }
              </h2>
              <div className={`card-item ${isActive === item.name ? "active-card" : ""}`}>
                <Oval
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass="card-loader"
                  visible={loading}
                  ariaLabel='oval-loading'
                  secondaryColor="#000"
                  strokeWidth={3}
                  strokeWidthSecondary={3}
                />
              {!loading &&
                  <div className="item-box">
                    <div className="item-img">
                      <img src={reposImg[index]} alt={item.name} />
                    </div>
                    <div className="item-text">
                      <h3>Author: {item.owner.login}</h3>
                      <div className="item-links">
                        <LinkButton
                          className="portfolio-btn"
                          link={item.html_url}
                          target="_blank"
                          text={'Github'}
                        />
                        <LinkButton
                          className="portfolio-btn"
                          link={item.html_url}
                          target="_blank"
                          text={'Code'}
                        />
                        <LinkButton
                          className="portfolio-btn"
                          link={item.homepage}
                          target="_blank"
                          text={'Live'}
                        />
                      </div>
                      <p>Languages used: {item.language}</p>
                      <div className="item-description">
                        <h4>Description:</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Portfolio;