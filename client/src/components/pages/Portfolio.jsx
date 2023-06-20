import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";

import './Portfolio.css';

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];

  const [repositories, setRepositories] = useState(repos[0]);
  const [active, setActive] = useState('portfolio');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = `http://localhost:8000/portfolio/`;
      const response = await axios.get(url + repositories);
      const jsonData = await response.data;

      setData(jsonData[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    fetchData()
  }, [repositories]);


  const handleClick = (e) => {
    const repository = e.target.getAttribute('data-value')
    setActive(repositories);
    setRepositories(repository);
  }

  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio-cards">
          <div className={active === 'portfolio' ? 'card gray active-text' : 'card gray'} data-name="gray">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[0]}>Project name: {repos[0]}</h2>
              <p>link to Github: {data.git_url}</p>
            </div>
          </div>
          <div className={active === 'Feedback-UI' ? 'card shadow-gray active-text' : 'card shadow-gray'} data-name="shadow-gray">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[1]}>Project name: {repos[1]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={active === 'Github-Finder' ? 'card silver active-text' : 'card silver'} data-name="silver">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[2]}>Project name: {repos[2]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={active === 'ReactWeather-app' ? 'card silver-black active-text' : 'card silver-black'} data-name="silver-black">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[3]}>Project name: {repos[3]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={active === 'Track_calories' ? 'card gray-black active-text' : 'card gray-black'} data-name="gray-black">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[4]}>Project name: {repos[4]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className={active === 'calculate-car-excise' ? 'card black active-text' : 'card black'} data-name="black">
            <div className="card-text">
              <h2 onClick={handleClick} data-value={repos[5]}>Project name: {repos[5]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio;