import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/gavin1.JPG";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Competitive Programmer", "CS Student @UWaterloo", "Fashion Enthusiast (jk)"];
  //const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      if (fullText.length - updatedText.length < 2)
        setDelta(500);
      else if (fullText.length - updatedText.length < 8)
        setDelta(prevDelta => prevDelta * 3 / 4);
      else
        setDelta(prevDelta => prevDelta * 5 / 6);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(2100);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(180);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Website!!</span>
                <h1>{`Hello! My name is Gavin Song, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Dev", "Video Game Programmer", "Computer Science Student", "Stack Overflow User" ]'><span className="wrap">{text}</span></span></h1>
                  <span className="flavorText">Born in Toronto, Lived in ShangHai, Studying at Waterloo. My mission to apply my love for coding to help make our world a better place, whether it
                     is a small UI improvement or an AI which can save lives. I look forward to working with you to improve this beautiful world!!
                      </span>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img 
                    src={headerImg} 
                    alt="Header Img" 
                    style={{ width: '80%', height: 'auto' }} 
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
