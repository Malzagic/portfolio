import React from "react";

import Container from "../../shared/components/UI/containers/Container";
import SectionTitle from "../../shared/components/UI/section/SectionTitle";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";
import Button from "../../shared/components/UI/buttons/Button";

export default function NotFound() {
  return (
    <section>
      <Container>
        <SectionTitle title="404"/>
        <div>
          <h1>Page Not Found 404</h1>
          <p>I am apologize, but the page you requested could not be found. Please check the URL and try again.</p>
          <Button href="/" >Back to Home Page</Button>
        </div>
      </Container>
    </section>
  );
}
