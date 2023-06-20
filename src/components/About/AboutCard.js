import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarad Chhetri </span>
            from <span className="purple"> Nepal.</span>
            <br /> I completed my Bachelor in Information Science Engieering
            from Nitte Meenakshi Institute of Technology,India
            <br />
            <br />
            I love learning new tech and solving coding problems.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket,Football,Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing and Composing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sarad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
