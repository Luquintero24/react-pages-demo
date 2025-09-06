import { Col } from "react-bootstrap";
import github from '../images/github-mark-white.svg';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img 
          src={imgUrl} 
          alt={title}
          style={{
            width: "100%",
            height: "200px",       // fixed uniform height
            objectFit: "cover",    // keeps aspect ratio, crops overflow
            borderRadius: "12px"   // optional: rounded corners
          }}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <section className="projectcard" id="projectcard">
            <a href={link}><img src={github} alt="github link" /></a>
          </section>
        </div>
      </div>
    </Col>
  )
}
