import meter1 from "../assets/img/front-end.png";
import meter3 from "../assets/img/back-end.png";
import meter2 from "../assets/img/react-logo.png";
import meter4 from "../assets/img/usaco.png";
import meter5 from "../assets/img/agile.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import waterlooLogo from "../assets/img/waterloo-logo.png";
import colorSharp from "../assets/img/skills-bg.png"
import { Col, Row, Alert } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Education</h2>

                        <Row>
  <Col xs={12} md={2} className="text-end mt-3">
    <img 
      src={waterlooLogo} 
      alt="UWaterloo Logo" 
      className="img-fluid mr-4"
      style={{ width: '140px', height: '120px', objectFit: 'contain' }} 
    />
  </Col>
  <Col xs={12} md={9} className="text-start mt-2 ml-4">
    <div className="ml-4">
    <h3 className="-mb-2">University of Waterloo</h3>
    <p className="-mt-2 mb-1"> Bachelor’s of Computer Science, Honors, Co-op</p>
    <ul className="mb-0 ps-3">
      <li>Faculty of Math Scholarship of $15,000; President’s Distinction Scholarship</li>
      <li>GPA: 3.9/4</li>
      <li>Coursework: Data Structures & Algorithms, Compilers, Operating Systems, Relational Databases, Object-Oriented
Programming, Statistics, Sequential Programs, Functional Programs</li>
    </ul>
    </div>
</Col>

</Row>


                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
