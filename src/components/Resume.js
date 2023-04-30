import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import TTU from '../images/TTU.jpg';
import ztm from '../images/ztmlogo.png';
import excel from '../images/excel.png';
import matlab from '../images/Matlab.png';


export const Resume = () => {


  return (
    <section className="resume" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__backInLeft": ""}>
                <h2>About</h2>
                <p>Here you will find a summary of my experience, education, awards and prior certifications.</p>
                <Tab.Container id="resume-tabs" defaultActiveKey="education">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="education">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="experience">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="awards">Certifications & Awards</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                    <Tab.Pane eventKey="education">
                      <div>
                        <h1 className="mb-0">Texas Tech University </h1>
                        <div className="subheading">Bachelor's degree,  Computer Science</div>
                        <div className="subheading">Minor: Business</div>
                        <div className="subheading">GPA: 4.0</div>
                        <div className="subheading1">August 2022- August 2026</div>
                        
                        <img src={TTU} alt="TTU" />
                      </div>
                      
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="experience">
                    <div class="timeline-block">
                        <h1>IT Help Central- Texas Tech University</h1>
                        <time>Student Analyst</time>
                        <li>Working with customers through phone, e-mail, and in-person to provide support for a wide range of issues, including hardware, software, network troubleshooting, and account management.</li>
                        <li>Position requires strong customer service skills, high attention to detail, and the ability to work with a diverse range of customers.</li>
                        <time>2015 - 2019</time>
                    </div>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards">
                      <div class="timeline-block">
                          <h1>Data Structures and Algorithms</h1>
                          <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e1791088-82c5-4c8d-a5f3-f82e997085b7.pdf"><img src={ztm} alt=""></img></a>
                          <time>Certificate</time>
                          <li>Learn, implement, and use different Data Structures and Algorithms.</li>
                          <li>Become a better developer by mastering computer science fundamentals.</li>
                          <li>Ace coding interviews given by some of the top tech companies.</li>
                          <time>December 2022</time>
                      </div>
                      <div class="timeline-block">
                          <h1>Microsoft Excel Professional</h1>
                          <time href="file:///C:/Users/lmqr2/OneDrive/Documents/EXCEL/Certificate.pdf"><img src={excel} alt=""></img></time>
                          <time>Certificate</time>
                          <li>Management of Visual Basic together with graphs, functions and dynamic tables.</li>
                          <li>Diploma in business management, and organization with Microsoft Excel.</li>
                          <time>December 2022</time>
                      </div>
                      <div class="timeline-block">
                          <h1>MatLab Programmer</h1>
                          <time href="file:///C:/Users/lmqr2/Downloads/MATLAB/Diploma%20MatLab.pdf"><img src={matlab} alt=""></img></time>
                          <time>Math Software Certificate</time>
                          <li>Symbolic and differential calculation.</li>
                          <li>Management of its graphical interface (GUI), graphics, arrays and control structures.</li>
                          <time>January 2021</time>
                      </div>
                      <div class="timeline-block">
                          <h1>President's Honor List</h1>
                          <time><img src={TTU} alt="TTU" /></time>
                          <time>Certificate</time>
                          <li>Awarded only to those students who have attained a grade-point ratio of 4.0 during the semester.</li>
                          <time></time>
                          <time>December 2022</time>
                      </div>
                      <div class="timeline-block">
                          <h1>Presidential Merit Scholarship</h1>
                          <img src={TTU} alt="TTU" />
                          <time>Award</time>
                          <li>Presidential Merit Scholarships are awarded to entering first-time freshmen who show exceptional academic ability through a high school rank and SAT score.</li>
                          <time>August 2022</time>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}