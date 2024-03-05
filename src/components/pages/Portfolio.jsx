import React, { useState, useEffect } from "react";
import axios from "axios";

import Section from "../../shared/components/UI/section/Section";
import SectionTitle from "../../shared/components/UI/section/SectionTitle";
import LinkButton from "../../shared/components/UI/buttons/LinkButton";
import { Oval } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();

const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  // FETCHING DATA FROM SERVER
  const fetchData = async () => {
    try {
      const url = `https://www.pmdev.ovh/api/portfolio`;
      const response = await axios.get(url);
      const data = response.data;
      setRepositories([...data]);
      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        toast.warn("Error server connection!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const handleClick = (e) => {
    let repo;

    if (e.target.getAttribute("data-value")) {
      repo = e.target.getAttribute("data-value");
    }

    setIsActive(repo);
  };

  // WHEN IS DINAMICLY CHANGED
  useEffect(() => {
    fetchData();
    setLoading(true);
  }, []);

  return (
    <Section title="portfolio">
      {/* loader */}
      <div className="center">
        <Oval
          color="#fff"
          wrapperStyle={{}}
          wrapperClass="card-loader"
          visible={loading}
          ariaLabel="oval-loading"
          secondaryColor="#000"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </div>
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
        {/* map through all repositories */}
        {repositories.map((item, index) => (
          <div key={index} className="card" onClick={(e) => handleClick(e)}>
            <h2 data-value={item.name}>
              {item.name.replace(/[^a-zA-Z0-9 ]/g, " ").toUpperCase()}
            </h2>
            <div
              className={`card-item ${
                isActive === item.name ? "active-card" : ""
              }`}
            >
              <div className="item-box">
                <div className="item-img">
                  {/* <img src={reposImg[index]} alt={item.name} /> */}
                </div>
                <div className="item-text">
                  <h3>Author: {item.owner.login}</h3>
                  <div className="item-links">
                    <LinkButton
                      className="portfolio-btn"
                      link={item.html_url}
                      target="_blank"
                      text={"Github"}
                    />
                    <LinkButton
                      className="portfolio-btn"
                      link={item.html_url}
                      target="_blank"
                      text={"Code"}
                    />
                    <LinkButton
                      className="portfolio-btn"
                      link={item.homepage}
                      target="_blank"
                      text={"Live"}
                    />
                  </div>
                  <p>Languages used: {item.language}</p>
                  <div className="item-description">
                    <h4>Description:</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
