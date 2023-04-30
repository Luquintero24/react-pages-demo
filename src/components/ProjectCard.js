
import { Col } from "react-bootstrap";
import github from '../images/github-mark-white.svg';

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <section className="projectcard" id="projectcard">
            <a href={link}><img src={github} alt=""></img></a>
          </section>
        </div>
      </div>
    </Col>
  )
}