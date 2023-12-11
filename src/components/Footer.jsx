import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/Footer.css";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://github.com/rodrigo0599"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/rodrigo-rivera-56570a271/"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100028630680630"
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
            <p className="footer__text">© 2023, All rights reserved</p>
        </footer>
    )
}
