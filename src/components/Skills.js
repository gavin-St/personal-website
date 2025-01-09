import meter1 from "../assets/img/front-end.png";
import meter3 from "../assets/img/back-end.png";
import meter2 from "../assets/img/react-logo.png";
import meter4 from "../assets/img/usaco.png";
import meter5 from "../assets/img/agile.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/skills-bg.png"

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
                        <h2>Skills</h2>
                        <p>I am currently in my 3rd year of my CS degree -<br></br> I hope to continue expanding my skills palette in the future!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          <div className="item3">
                                <img src={meter3} alt="Image" />
                                <h5>Back End</h5>
                            </div>
                            <div className="item3">
                                <img src={meter3} alt="Image" />
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item3">
                                <img src={meter3} alt="Image" />
                                <h5>Agile</h5>
                            </div>
                            <div className="item1">
                                <img src={meter1} alt="Image" />
                                <h5>Front End</h5>
                            </div>
                            <div className="item2">
                                <img src={meter2} alt="Image" />
                                <h5>JS Frameworks</h5>
                            </div>
                            <div className="item4">
                                <img src={meter4} alt="Image" />
                                <h5>Competitive Programming</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
