import { useState, useEffect} from "react";
import { Navbar, Container ,Nav} from "react-bootstrap";
import logo from '../images/logo.png';
import navIcon1 from '../images/nav-icon1.svg';
import navIcon2 from '../images/github-mark-white.svg';
import navIcon3 from '../images/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar= () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] =useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return ()  => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdatedActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Router>

            <Navbar expand="lg" className={ scrolled? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdatedActiveLink('projects')}>Projects</Nav.Link>

                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/luisa-quintero-990b2a258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgNYpLdtDRv2Kl%2BAZYYI%2FXg%3D%3D"><img src={navIcon1} alt=""></img></a>
                                <a href="https://github.com/Luquintero24"><img src={navIcon2} alt=""></img></a>
                                <a href="https://www.instagram.com/luquintero24/"><img src={navIcon3} alt=""></img></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Contact Me!</span></button>
                            </HashLink>
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
  
    )
}
