import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import StudyNotion from "../../Assets/Projects/Project1.png";
import movie from "../../Assets/Projects/movie.png";
import Ecommerce from "../../Assets/Projects/E-commerce.png";
import pass from "../../Assets/Projects/Project2.png";
import port from "../../Assets/Projects/Project4.png";
import imdb from "../../Assets/Projects/Project5.png";
import weather from "../../Assets/Projects/Project6.png";
import rozarpay from "../../Assets/Projects/Project7.png";
import tic_toi from "../../Assets/Projects/Project8.png";
import bank from "../../Assets/Projects/Project9.png";

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
              imgPath={StudyNotion}
              isBlog={false}
              title="StudyNotion"
              description="StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
"
              ghLink="https://github.com/Nitish76kumar/StudyNotion"
              demoLink="https://study-notion-seven-flax.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Explorer System"
              description="This Movie Explorer System using React.js can provide users with a seamless and interactive interface to search, browse, and discover movies. By integrating API data, filtering, and responsive design, it offers a modern and scalable way to explore a vast movie collection."
              ghLink="https://github.com/Nitish76kumar/Movie-Explorer-System"
              demoLink="https://movie-explorer-system.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="WEATHER APP"
              description="Created a Weather App that displays the current weather condition. This app is made with the help of Html, CSS, and JavaScript and is mobile responsive as well."
              ghLink="https://github.com/Nitish76kumar/WeatherApp-using-JS"
              demoLink="https://nitish76kumar.github.io/WeatherApp-using-JS/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title=" E-commerce Website "
              description="An eCommerce Website using the MERN stack involves building a full-fledged online store with MongoDB, Express.js, React.js, and Node.js. This setup allows for a robust, scalable, and high-performance platform where users can browse products, manage their carts, place orders, and make payments."
              ghLink="https://github.com/Nitish76kumar/E-commerce-QuadB-"
              demoLink="https://github.com/Nitish76kumar/E-commerce-QuadB-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pass}
              isBlog={false}
              title="Random Password Generator"
              description="
              🔧I've utilized HTML, CSS, and JavaScript to create a powerful tool that generates secure passwords tailored to your preferences. 🛠️
              
              .....🔒This project lets you generate secure passwords with various options."
              ghLink="https://github.com/Nitish76kumar/Random-Password-Generator-using-Javascript"
              demoLink="https://random-password-generator-using-javascript.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio_Website"
              description="
              After getting clear precise knowledge of #HTML #CSS #responsiveness and #animation . I decided to make a Dummy Portfolio website for myself.."
              ghLink="https://github.com/Nitish76kumar/PortfolioNitish"
              demoLink="https://portfolio-nitish.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="IMDb_Clone"
              description="Thrilled to present my React.js-based IMDb clone with API integration! 🚀🎬Explore movies like never before: real-time data, ratings, and reviews. Check it out!"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rozarpay}
              isBlog={false}
              title="Razorpay_Clone"
              description="Created this Razorpay clone using basic HTML and Tailwind. I have even tried to make it responsive for different screen sizes.."
              ghLink="https://github.com/Nitish76kumar/RazorpayClone"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic_toi}
              isBlog={false}
              title="Tic-Tac-Toe Game "
              description=" I've built a fully functional and responsive Tic-Tac-Toe Game using HTML, CSS, and JavaScript. This was a challenging but rewarding project that allowed me to apply my coding skills and develop my problem-solving abilities."
              ghLink="https://github.com/Nitish76kumar/TicTacToe-Game-Using-Js"
              demoLink="https://nitish76kumar.github.io/TicTacToe-Game-Using-Js/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Basic_Banking_System"
              description="Created this BasicBankingSystem using basic HTML and Tailwind A web application used to tranfer virtual money between multiple users and also record the banking transactions/ activities."
              ghLink="https://github.com/Nitish76kumar/BankSystem"
              demoLink="https://nitish76kumar.github.io/BankSystem/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
