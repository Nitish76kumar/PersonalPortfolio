import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import car from "../../Assets/Projects/car.png";
import website from "../../Assets/Projects/website.png";
import cafe from "../../Assets/Projects/cafe.png";
import cancer from "../../Assets/Projects/cancer.png";
import movie from "../../Assets/Projects/movie.gif";

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
              imgPath={cafe}
              isBlog={false}
              title="Café API"
              description="Implemented with Python using Flask and SQLAlchemy and documented with POSTMAN, this API provides users with different information regarding nearby cafes based on users' calls"
              link="https://github.com/Hiten1708/CAFE_API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="10 Movies"
              description="Developed using Flask as Backend and React as Frontend, its a website that allows users to rank movies according to their ratings and generate movie cards based on their input"
              link="https://github.com/Hiten1708/10MOVIES"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              title="MbrllaHacks Website"
              description="Implemented and improvised concept/layout of the overall website in React, CSS, Bootstrap and implemented responsive pages then deployed on Vercel which attracted 50% more developers and volunteers"
              link="https://github.com/MbrllaHacks/Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Car Classification with KNN"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://colab.research.google.com/drive/1UvBeVbsjnwkyS4K29vGuPV_neid2fWYe?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cancer}
              isBlog={false}
              title="Breast Cancer Prediction With SVM"
              description="Constructed machine learning model to predict the diagnosis of a breast tumor by the SVM Classification model using scikit-learn, Pandas, NumPy, Matplotlib and evaluated the model using confusion matrix the receiver operating curves (ROC) with 96% accuracy"
              link="https://colab.research.google.com/drive/1UvBeVbsjnwkyS4K29vGuPV_neid2fWYe?usp=sharing"
            />
          </Col>

        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
