import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/camera.png";
import projImg2 from "../assets/img/UWNests.png";
import projImg3 from "../assets/img/SnakeAI.png";
import projImg4 from "../assets/img/LightDance.png";
import projImg5 from "../assets/img/Synethesify.png";
import projImgDefault from "../assets/img/back-end.png";
import projImg6 from "../assets/img/project-cadence.png"
import projImg7 from "../assets/img/cambio.jpg";
import projImg8 from "../assets/img/trading-bot.png";
import colorSharp2 from "../assets/img/projects-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "NestTrade Trading Bot",
      description: "Multiple algorithmic live trading accounts",
      imgUrl: projImg8,
      link: "https://github.com/gavin-St/trading-bot"
    },
    {
      title: "Cadence",
      description: "Elegeant Music Licence Distributor",
      imgUrl: projImg6,
      link: "https://github.com/gavin-St/Cadence"
    },
    {
      title: "Light Dance",
      description: "Motion Detection Beat Saber Game",
      imgUrl: projImg4,
      link: "https://github.com/gavin-St/LightDance"
    },
    {
      title: "UWNests",
      description: "Waterloo Based Social Media Network",
      imgUrl: projImg2,
      link: "https://github.com/gavin-St/project-program"
    },
    {
      title: "Home Security Tracker",
      description: "Security Backend Prototype",
      imgUrl: projImg1,
      link: "https://github.com/gavin-St/Home-Security-Tracker"
    },
    {
      title: "Snake Game AI",
      description: "Deep Q Neural Network Plays Snake",
      imgUrl: projImg3,
      link: "https://github.com/gavin-St/snake-game-ai-pytorch"
    },
    {
      title: "Synethesify",
      description: "Spotify Playlist Art Generator",
      imgUrl: projImg5,
      link: "https://github.com/gavin-St/synesthesify"
    },
    {
      title: "Cambio solver",
      description: "In depth solver for every action in the Cambio card game",
      imgUrl: projImg7,
      link: "https://github.com/gavin-St/cambio-bot"
    },
    {
      title: "-Coming Soon-",
      description: "",
      imgUrl: projImgDefault,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> Feel free to check out all my creations on my GitHub! </p>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp mt-2" : "mt-2"}>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  </Tab.Content>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
