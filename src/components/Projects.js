import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/camera.png";
import projImg2 from "../assets/img/UWNests.png";
import projImg3 from "../assets/img/SnakeAI.png";
import projImg4 from "../assets/img/LightDance.png";
import projImg5 from "../assets/img/Synethesify.png";
import projImgDefault from "../assets/img/back-end.png";
import projImg6 from "../assets/img/project-cadence.png"
import colorSharp2 from "../assets/img/projects-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Home Security Tracker",
      description: "Security Backend Prototype",
      imgUrl: projImg1,
      link: "https://github.com/gavin-St/Home-Security-Tracker"
    },
    {
      title: "UWNests",
      description: "Waterloo Based Social Media Network",
      imgUrl: projImg2,
      link: "https://github.com/gavin-St/project-program"
    },
    {
      title: "Synethesify",
      description: "Spotify Playlist Art Generator",
      imgUrl: projImg5,
      link: "https://github.com/gavin-St/synesthesify"
    },
    {
      title: "Light Dance",
      description: "Motion Detection Beat Saber Game",
      imgUrl: projImg4,
      link: "https://github.com/gavin-St/LightDance"
    },
    {
      title: "Cadence",
      description: "Elegeant Music Licence Distributor",
      imgUrl: projImg6,
      link: "https://github.com/gavin-St/Cadence"
    },
    {
      title: "Snake Game AI",
      description: "Deep Q Neural Network Plays Snake",
      imgUrl: projImg3,
      link: "https://github.com/gavin-St/snake-game-ai-pytorch"
    },
    // {
    //   title: "-Coming Soon-",
    //   description: "",
    //   imgUrl: projImgDefault,
    // },
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
                <p> Feel free to check out all my humble creations on my GitHub! </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More to come (I promise)!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More to come (I promise)!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
