import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../images/project-img1.png";
import projImg2 from "../images/project-img2.png";
import projImg3 from "../images/moneta.png";
import projImg4 from "../images/wastewise.png";
import projImg5 from "../images/lockheed.png";
import projImg6 from "../images/bol.png";
import projImg7 from "../images/movies.png";
import projImg8 from "../images/portfolio.png";
import projImg9 from "../images/kitchen.jpg";
import projImg10 from "../images/nodary.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "VOCAB'S GENIE",
      description: "Game designed in Python, with music and spanish dictionary",
      imgUrl: projImg1,
      link: "https://github.com/Luquintero24/Vocab-s-Genie"
    },
    {
      title: "Machine Learning Project",
      description: "Project about the prediction of the power consumption in different zones of a city",
      imgUrl: projImg2,
      link: "https://github.com/Luquintero24/Machine-Learning/blob/10b5acab6b4a90a6f3c7bed4a7f86e5b607d0e24/Power%20consumption%20project%20(Main%20ver).ipynb"
    },
    {
      title: "Moneta Company",
      description: "The company website for Moneta",
      imgUrl: projImg3,
      link: "https://github.com/Luquintero24/Luquintero24.github.io"
    },
    {
      title: "Waste Wise",
      description: "AI model that accurately predicts the optimal quantity of products a company should produce in order to minimize waste while maximizing profits",
      imgUrl: projImg4,
      link: "https://github.com/Luquintero24/Hackathon-WasteWise?tab=readme-ov-file"
    },
    {
      title: "Lockheed Martin Project",
      description: "Machine Learning model for aircraft maintenance workers that streamlines the process of documenting faults",
      imgUrl: projImg5,
      link: "https://github.com/Luquintero24/Lockheed-Project"
    },
    {
      title: "Automation of Invoices",
      description: "The project involves developing a data extraction and clustering system for processing diverse invoice formats.",
      imgUrl: projImg6,
      link: "https://github.com/Luquintero24/Automation-of-Data-Extraction-Process"
    },
    {
      title: "Movie Booking System",
      description: "Web-based application designed to streamline the process of reserving movie tickets",
      imgUrl: projImg7,
      link: "https://github.com/Luquintero24/Automation-of-Data-Extraction-Process"
    },
    {
      title: "Personal Portfolio",
      description: "My Personal portfolio made with React",
      imgUrl: projImg8,
      link: "https://github.com/Luquintero24/react-pages-demo"
    },
    {
      title: "Kitchen",
      description: "The highest level of programming in the market: a no-code, voice-first developer tool that transforms raw ideas into production-ready applications",
      imgUrl: projImg9,
      link: "https://github.com/Luquintero24/Kitchen"
    },
    {
      title: "Nodary",
      description: "This project turns unstructured emails into a knowledge graph, runs parallel analytics to spot risks, and delivers daily summaries for managers.",
      imgUrl: projImg10,
      link: "https://github.com/Luquintero24/HackwesTX25"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__backInUp" : ""}>
                  <h2>Projects</h2>
                  <p>Here you will find different projects that I have developed during my years of experience.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
