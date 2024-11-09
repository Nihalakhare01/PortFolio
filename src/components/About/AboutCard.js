import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nihal Akhare </span>
            currently pursuing
            <b className="purple"> B.Tech </b>  
            in Information Technology at St. Vincent Pallotti College of Engineering and Technology.
            <br /><br />
            I'm a self-taught developer with a passion for
            <b className="purple"> computer science </b> and <b className="purple"> programming</b>. 
            I've been fascinated by computers and their functioning ever since I can remember. 
            <br /><br />
            I started my coding journey with 
            <b className="purple"> Java</b>, then learning
            <b className="purple"> C</b>  and  <b className="purple"> C++</b>.
            
            Then being interested in web-development, I learned <b className="purple"> HTML5</b>, <b className="purple"> CSS</b>, basics of <b className="purple"> Javascript</b> for Front-End;
             and <b className="purple"> MySQL</b>, for Back-End.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Investment & Trading in Stock Market
            </li>
            <li className="about-activity">
              <ImPointRight /> Financial Analysis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
