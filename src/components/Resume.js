import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import TTU from '../images/Texas_Tech_Athletics_logo.svg.png';
import ztm from '../images/ztmlogo.png';
import excel from '../images/excel.png';
import matlab from '../images/Matlab.png';
import dell from '../images/delllogo.png';
import patterson from '../images/patterson-logo.svg'
import lockheed from '../images/lockheedmartin.png'
import paycom from '../images/paycom.png'
import codepath from '../images/codepath.jpeg'
import hackwestx from '../images/hackwestx.png'
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
                      <div className="mb-4">
                        {/* Texas Tech University */}
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="mb-0 me-2">Texas Tech University</h1>
                          <img src={TTU} alt="TTU" style={{ width: "75px", height: "75px" }} />
                        </div>
                        <div className="subheading">Bachelor's degree, Computer Science</div>
                        <div className="subheading">Minor: Business & Math</div>
                        <div className="subheading">GPA: 4.0</div>
                        <div className="subheading1">August 2022 - August 2026</div>

                        {/* CodePath at TTU */}
                        <div className="d-flex align-items-center mt-3 mb-2">
                          <h1 className="mb-0 me-2">CodePath at TTU</h1>
                          <img src={codepath} alt="CODEPATH" style={{ width: "75px", height: "75px" }} />
                        </div>
                        <div className="subheading">President and TTU Chapter Founder</div>
                        <div className="subheading1">May 2024 - Present</div>
                      </div>


                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="experience">
                    <div className="timeline-block">
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="mb-0 me-2">Dell Technologies - Hopkinton, MA</h1>
                          <img src={dell} alt="DELL" style={{ width: "60px", height: "60px" }} />
                        </div>

                        <time>Software Engineer Intern</time>
                        <li>Enhanced the Pacemaker validator tool for Dell’s PowerStore storage platform by expanding test coverage across critical control path components, improving validation accuracy by 80% and ensuring high availability in appliance deployment.</li>
                        <li>Refactored the validator into a scalable, modular Python framework improving runtime efficiency by 50% and enabling full test suite execution across all PowerStore appliance configurations within CI/CD workflows using Jenkins, GitLab Runners, and Docker.</li>
                        <li>Collaborated with engineers across DevOps and platform teams to ensure the validator supported dynamic microservice configurations and API-driven resource validation, helping prevent misconfiguration across incoming customer appliances.</li>
                        <time>May 2025- August 2025</time>
                    </div>
                    <div className="timeline-block">
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="mb-0 me-2">Patterson-UTI - Houston, TX</h1>
                          <img src={patterson} alt="PATTERSON" style={{ width: "150px", height: "60px" }} />
                        </div>
                        <time>Software Engineer Intern</time>
                        <li>Achieved an accuracy rate of 80-85% by engineering a machine learning model using CNNs, K-means, AWS Textract, SciPy, and scikit-learn to automate text extraction and template classification from images, drastically reducing manual data entry in the sand delivery process for the fracturing line.</li>
                        <li>Saved 350 hours per month by leveraging AWS Textract and regular expressions to optimize text extraction patterns, streamlining the sand delivery workflow and reducing manual entry by 80%.</li>
                        <li>Utilized Amazon RDS with PostgreSQL for database management, SQL Alchemy as the ORM, AWS S3 for secure image storage, and deployed the model in a Docker container on an AWS EC2 instance. Retrieved and processed JSON data from an API, ensuring efficient and scalable operations.</li>
                        <time>May 2024- August 2024</time>
                    </div>
                    <div className="timeline-block">
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="mb-0 me-2">Lockheed Martin - Remote</h1>
                          <img src={lockheed} alt="LOCKHEED" style={{ width: "190px", height: "50px" }} />
                        </div>
                        <time>Software Engineer Intern</time>
                        <li>Achieved a 50% reduction in man-hours for documenting aircraft maintenance actions by developing software that streamlined fault documentation and generated repair documents.</li>
                        <li>Engineered a machine learning model using Python, Transformers, and PyTorch with hierarchical clustering to create custom maintenance data entry templates. This model, leveraging past maintenance history and Technical Order data, enhanced fault and repair suggestions and was showcased through a user-friendly Streamlit interface.</li>
                        <li>Improved operational efficiency by significantly reducing the time needed for aircraft maintenance documentation through the software solution.</li>
                        <time>May 2023- December 2023</time>
                    </div>
                    <div className="timeline-block">
                        <div className="d-flex align-items-center mb-2">
                          <h1 className="mb-0 me-2">Rawls College - Lubbock, TX</h1>
                          <img src={TTU} alt="TTU" style={{ width: "70px", height: "70px" }} />
                        </div>
                        <time>Full Stack Developer</time>
                        <li>Developed web applications and handled web service requests in Microsoft Expression Web utilizing PHP, ASP.NET, HTML5, CSS and JavaScript.</li>
                        <li>Created and maintained a new master database using SQL Server Management Studio (SSMS) for managing form requests for faculty and students at Rawls CoBA.</li>
                        <li>Employed jQuery and JSON data to enhance client-side interactivity and streamline data exchanges.</li>
                        <time>January 2024- Present</time>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="awards">
                       <div className="timeline-block">
                          <h1>HackWesTX Winner</h1>
                          <a><img src={hackwestx} alt=""></img></a>
                          <time>Hackathon</time>
                          <li>Third place in the HackWesTX hackathon with Waste Wise, an AI model that accurately predicts the optimal quantity of products a company should produce to minimize waste while maximizing profits.</li>
                          <time>Fall 2023</time>
                      </div>
                      <div className="timeline-block">
                          <h1>CodePath TIP102</h1>
                          <a><img src={codepath} alt=""></img></a>
                          <time>Apprenticeship</time>
                          <li> Trained to solve challenging algorithm problems in real interviews at top companies, with dedicated 
                          hands-on practice time with a pod of students.</li>
                          <li>Mentorship from industry professionals and Info sessions from experienced engineers.</li>
                          <time>May 2023 - Aug 2023</time>
                      </div>
                      <div className="timeline-block">
                          <h1>Technology Summer Program</h1>
                          <a><img src={paycom} alt=""></img></a>
                          <time>Paycom</time>
                          <li>Skills Learned: PHP · C# · React.js · DevOps · Git · Application Security · Containerization · Software Development Life Cycle (SDLC) · Java</li>
                          <time>May 2023</time>
                      </div>
                      <div className="timeline-block">
                          <h1>Data Structures and Algorithms</h1>
                          <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-e1791088-82c5-4c8d-a5f3-f82e997085b7.pdf"><img src={ztm} alt=""></img></a>
                          <time>Certificate</time>
                          <li>Learn, implement, and use different Data Structures and Algorithms.</li>
                          <li>Become a better developer by mastering computer science fundamentals.</li>
                          <li>Ace coding interviews given by some of the top tech companies.</li>
                          <time>December 2022</time>
                      </div>
                      <div className="timeline-block">
                          <h1>Microsoft Excel Professional</h1>
                          <time href="file:///C:/Users/lmqr2/OneDrive/Documents/EXCEL/Certificate.pdf"><img src={excel} alt=""></img></time>
                          <time>Certificate</time>
                          <li>Management of Visual Basic together with graphs, functions and dynamic tables.</li>
                          <li>Diploma in business management, and organization with Microsoft Excel.</li>
                          <time>December 2022</time>
                      </div>
                      <div className="timeline-block">
                          <h1>MatLab Programmer</h1>
                          <time href="file:///C:/Users/lmqr2/Downloads/MATLAB/Diploma%20MatLab.pdf"><img src={matlab} alt=""></img></time>
                          <time>Math Software Certificate</time>
                          <li>Symbolic and differential calculation.</li>
                          <li>Management of its graphical interface (GUI), graphics, arrays and control structures.</li>
                          <time>January 2021</time>
                      </div>
                      <div className="timeline-block">
                          <h1>President's Honor List</h1>
                          <time><img src={TTU} alt="TTU" /></time>
                          <time>Certificate</time>
                          <li>Awarded only to those students who have attained a grade-point ratio of 4.0 during the semester.</li>
                          <time></time>
                          <time>December 2022</time>
                      </div>
                      <div className="timeline-block">
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