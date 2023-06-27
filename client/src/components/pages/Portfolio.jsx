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
import calculateCarExcise from '../../assets/github-projects/calculate-car-excise.png';

import './Portfolio.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
AOS.init();

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];
  const reposImg = [portfolio, feedbackUI, githubFinder, reactWeatherApp, trackCalories, calculateCarExcise];

  const [repositories, setRepositories] = useState(repos[0]);
  const [active, setActive] = useState(repos[0]);
  const [isClicked, setIsClicked] = useState(repos[0]);
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async (repo) => {
    try {
      const url = `https://www.pmdev.ovh/portfolio/`;
      console.log(url + repo)
      const response = await axios.get(url + repo);
      const jsonData = await response.data;

      setData(jsonData[0])
      setUserData(jsonData[0].owner);
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

  useEffect(() => {
    fetchData(repositories)
    setLoading(true);
  }, [repositories])

  const handleClick = (e) => {
    const repository = e.target.getAttribute('data-value');
    if (repository === isClicked) return;

    setRepositories(repository)
    setActive(repository);
    setLoading(true)
  }

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
        <div className="portfolio-cards" data-aos="fade-right">
          {repos.map((items, index) => (
            <div key={index} className="card">
              <h2
                onClick={(e) => {
                  handleClick(e)
                  setIsClicked(e.target.getAttribute('data-value'));
                }}
                data-value={items}
              >
                {
                  items.replace(/[^a-zA-Z0-9 ]/g, ' ').toUpperCase()
                }
              </h2>
              <div className={`card-item ${active !== items ? '' : 'active-card'}`}>
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
                      <img src={reposImg[index]} alt="" />
                    </div>
                    <div className="item-text">
                      <h3>Author: {userData.login}</h3>
                      <div className="item-links">
                        <LinkButton
                          className="portfolio-btn"
                          link={userData.html_url}
                          target="_blank"
                          text={'Github'}
                        />
                        <LinkButton
                          className="portfolio-btn"
                          link={data.html_url}
                          target="_blank"
                          text={'Code'}
                        />
                        <LinkButton
                          className="portfolio-btn"
                          link={data.homepage}
                          target="_blank"
                          text={'Live'}
                        />
                      </div>
                      <p>Languages used: {data.language}</p>
                      <div className="item-description">
                        <h4>Description:</h4>
                        <p>{data.description}</p>
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