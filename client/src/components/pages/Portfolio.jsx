import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "../../shared/components/UX/containers/Container";
import { Oval} from 'react-loader-spinner'

import './Portfolio.css';

const Portfolio = () => {
  const repos = ['portfolio', 'Feedback-UI', 'Github-Finder', 'ReactWeather-app', 'Track_calories', 'calculate-car-excise'];

  const [repositories, setRepositories] = useState(repos[0]);
  const [active, setActive] = useState(repos[0]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async (repo) => {
    try {
      const url = `http://localhost:8000/portfolio/`;
      const response = await axios.get(url + repo);
      const jsonData = await response.data;

      setLoading(false);
      setData(jsonData[0])
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(repositories)
  }, [repositories])

  const handleClick = (e) => {
    const repository = e.target.getAttribute('data-value');

    setRepositories(repository)
    setActive(repository);
    setLoading(true)
  }

  return (
    <section className="portfolio">
      <Container>
        <div className="portfolio-cards">
          {repos.map(items => (
            <div key={items.length} className="card">
              <h2 onClick={handleClick} data-value={items}>Project name: <span data-value={items}>{items.toUpperCase()}</span></h2>
              <div className={`card-item ${active !== items ? '' : 'active-card'}`}>
                <Oval
                  color="#333"
                  wrapperStyle={{}}
                  wrapperClass="card-loader"
                  visible={loading}
                  ariaLabel='oval-loading'
                  secondaryColor="#000"
                  strokeWidth={3}
                  strokeWidthSecondary={3}
                />
                {!loading &&
                  <ul>
                    <li>{data.name}</li>
                  </ul>
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