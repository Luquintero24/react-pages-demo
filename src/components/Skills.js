import meter1 from "../images/coding.png";
import meter2 from "../images/python.png";
import meter3 from "../images/hierarchy-structure.png";
import meter4 from "../images/c-.png";
import meter5 from "../images/c- (1).png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__backInDown": ""}>
                            <h2>Skills</h2>
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                    <div className="item">
                                        <img src={meter1} alt="Image" />
                                        <h5>Web Development</h5>
                                        <p>HTML, CSS, bootstrap, JavaScript, jQuery, MongoDB, React</p>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Image" />
                                        <h5>Python</h5>
                                        <p>Game design and programming essentials</p>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Image" />
                                        <h5>Data Structures & Algorithms</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter4} alt="Image" />
                                        <h5>C programming</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter5} alt="Image" />
                                        <h5>C++ programming</h5>
                                    </div>
                                </Carousel>
                        </div>}
                    </TrackVisibility>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
} 