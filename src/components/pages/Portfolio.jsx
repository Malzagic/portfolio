import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Section from "../../shared/components/UI/section/Section";
import Card from "../portfolio/Card";

import { Oval } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Portfolio.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

let myuuid = uuidv4();

AOS.init();

export default function Portfolio() {
  const [repositories, setRepositories] = useState([]);
  const [isActive, setIsActive] = useState();
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const clickHandler = (e) => {
    let repo;

    if (
      e.target.getAttribute("data-value") === isActive ||
      e.target.getAttribute("data-value") === null
    ) {
      return;
    }

    repo = e.target.getAttribute("data-value");

    setIsActive(repo);
  };

  // WHEN IS DINAMICLY CHANGED
  useEffect(() => {
    // FETCHING DATA FROM SERVER
    const fetchData = async () => {
      try {
        setLoading(true);

        const url = `https://rest-api-server-y92f.onrender.com/api/portfolio`;
        const response = await axios.get(url);
        const data = response.data;

        setRepositories(data);
        setLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);

        if (error.message === "Network Error") {
          toast.warn("Error server connection!", { toastId: myuuid });
        } else {
          toast.error("Something went wrong!", { toastId: myuuid });
        }

        setLoading(true);
      }
    };

    fetchData();
  }, []);

  if (loading || !repositories) {
    return (
      <>
        {isError && (
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
        )}
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
      </>
    );
  }

  return (
    <Section title="portfolio">
      <div className={styles.cardsContainer} data-aos="fade-right">
        {typeof repositories !== "string" &&
          repositories.map((item, index) => (
            <Card
              key={index}
              onClick={clickHandler}
              isActive={isActive}
              name={item.name}
              author={item.owner.login}
              url={item.html_url}
              homepage={item.homepage}
              language={item.language}
              description={item.description}
              topics={item.topics.map((topic) => topic)}
            ></Card>
          ))}
      </div>
    </Section>
  );
}
