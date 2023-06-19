import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";

import './Portfolio.css';

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];

  const [repositories, setRepositories] = useState(repos[0]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/portfolio/`;
        const response = await axios.get(url + repositories);
        const jsonData = await response.data;
  
        console.log(jsonData[0])
      } catch (error) {
        console.error(error);
      }
    };

    fetchData()
  }, [repositories]);


  const handleClick = (e) => {
    const repository = e.target.getAttribute('data-value')
    setRepositories(repository);
  }

  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio-cards">
            <div className="card gray" data-season="gray">
              <h2 onClick={handleClick} data-value={repos[0]}>Project name: {repos[0]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card shadow-gray" data-season="shadow-gray">
              <h2 onClick={handleClick} data-value={repos[1]}>Project name: {repos[1]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card silver" data-season="silver">
              <h2 onClick={handleClick} data-value={repos[2]}>Project name: {repos[2]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card silver-black" data-season="silver-black">
              <h2 onClick={handleClick} data-value={repos[3]}>Project name: {repos[3]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card gray-black" data-season="gray-black">
              <h2 onClick={handleClick} data-value={repos[4]}>Project name: {repos[4]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card black" data-season="black">
              <h2 onClick={handleClick} data-value={repos[5]}>Project name: {repos[5]}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio;