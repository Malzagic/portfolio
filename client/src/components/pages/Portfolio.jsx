import React, { useState, useEffect } from "react";
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";
import { Oval } from 'react-loader-spinner';
import portfolio from '../../assets/github-projects/portfolio.png';
import feedbackUI from '../../assets/github-projects/Feedback-UI.png';
import githubFinder from '../../assets/github-projects/Github-Finder.png';
import reactWeatherApp from '../../assets/github-projects/ReactWeather-app.png';
import trackCalories from '../../assets/github-projects/Track_calories.png';
import calculateCarExcise from '../../assets/github-projects/calculate-car-excise.png';

import './Portfolio.css';

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];
  const reposImg = [portfolio, feedbackUI, githubFinder, reactWeatherApp, trackCalories, calculateCarExcise];

  const [repositories, setRepositories] = useState(repos[0]);
  const [active, setActive] = useState(repos[0]);
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async (repo) => {
    try {
      const url = `http://localhost:8000/portfolio/`;
      const response = await axios.get(url + repo);
      const jsonData = await response.data;

      setData(jsonData[0])
      setUserData(jsonData[0].owner);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(repositories)
    setLoading(true);
  }, [repositories])

  const handleClick = (e) => {
    const repository = e.target.getAttribute('data-value');

    setRepositories(repository)
    setActive(repository);
    setLoading(true)
  }

  console.log(userData)
  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio-cards">
          {repos.map((items, index) => (
            <div key={index} className="card">
              <h2 onClick={handleClick} data-value={items}>Project name: <span data-value={items}>{items.toUpperCase()}</span></h2>
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
                        <Link className="portfolio-link portfolio-btn" to={userData.html_url}>Github</Link>
                        <Link className="portfolio-link portfolio-btn" to={data.html_url}>Code</Link>
                        <Link className="portfolio-link portfolio-btn" to={data.homepage}>Live</Link>
                      </div>
                      <p>Languages used: {data.language}</p>
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