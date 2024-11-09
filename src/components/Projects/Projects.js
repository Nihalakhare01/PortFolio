import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edgelearn from "../../Assets/Projects/Edgeledger.png";
import show from "../../Assets/Projects/codeEditor.png";
import grilli from "../../Assets/Projects/Grilli.png";
import airbnb from "../../Assets/Projects/airbnb.png";
import weather from "../../Assets/Projects/weatherjpeg.jpeg";
import hospital from "../../Assets/Projects/hospital.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb}
              isBlog={false}
              title="Travel Managewell"
              description="A Responsive trawell mangement website with full and proper functionallities by using Node and expresss templates for providing the enivronment with the help of mongoDB data base which is hosted on mongodb Atlas. Uses Cloudinary as the cloud services for storing the images .After all, Deploy with the help of Render for catching the amazing result."
              ghLink="https://github.com/Nihalakhare01/Travel-Mangewell"
              demoLink="https://travel-management-website.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Health Well"
              description="Hospital Management website built using technologies and frameworks like HTML, CSS, Javascript and Bootstrap"
              ghLink="https://github.com/Nihalakhare01/Hospital-webiste"
              demoLink="globalhospital.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grilli}
              isBlog={false}
              title="Grilli"
              description="A responsive Restaurant management website which includes various section of restaurant . it is created by using HTML, CSS Javacsript added some more styles in the website."
              ghLink="hhttps://github.com/Nihalakhare01/Grilli"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edgelearn}
              isBlog={false}
              title="Edge Ledger"
              description="Responsive Website created by using Html, Css, Java script - Edge Ledger"
              ghLink="https://github.com/Nihalakhare01/MERN-Stack-Practices/tree/main/Responsive%20Edge%20ledger%20Website"
              demoLink="edgelearn.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={show}
              isBlog={false}
              title="Showroom Mangement System"
              description="Showroom Management System is a OOPs concept base small project by using Java language. In this project, Inheritance, Class & Object Creation,File handling, Array of Objects importing packages like various tasks are perform."
              ghLink="https://github.com/Nihalakhare01/Showroom-Management-System-"
             // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="A weather app project provides weather forecasts for a user's location, or designing a user interface that provides comprehensive data. The technology used in the project, such as Language like react and Api's etc."
              ghLink="https://github.com/Nihalakhare01/Weather-App/tree/main/Mini%20project"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
