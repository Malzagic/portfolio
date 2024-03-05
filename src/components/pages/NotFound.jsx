import React from "react";

import Section from "../../shared/components/UI/section/Section";
import Container from "../../shared/components/UI/containers/Container";
import Button from "../../shared/components/UI/buttons/Button";

import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <Section title="Not Found">
      <Container>
        <div>
          <h1>Page Not Found 404</h1>
          <p>
            I am apologize, but the page you requested could not be found.
            Please check the URL and try again.
          </p>
          <Button href="/">Back to Home Page</Button>
        </div>
      </Container>
    </Section>
  );
}
