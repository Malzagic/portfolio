import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";

import './Portfolio.css';

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];

  const [repositories, setRepositories] = useState(repos[0]);
  const [active, setActive] = useState('');
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
    const repository = e.target.getAttribute('data-value');
    console.log(repository)
    // setActive(repository);
    // setRepositories(repository);
  }

  console.log(data)

  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio-cards">
          <div className="card">
            {repos.map(items => (
              <>
                <h2 onClick={handleClick} data-value={items}>Project name: <span data-value={items}>{items.toUpperCase()}</span></h2>
                <div className="card-items">

                </div>
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio;