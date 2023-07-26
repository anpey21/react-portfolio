import { Link, NavLink } from "react-router-dom";
import "./index.scss"
import AnnaLogo from "../../assets/images/AnnaLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={AnnaLogo} alt="logo" />
      </Link>
      <nav>
        <NavLink className= "home-link" exact ="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink className="about-link" exact ="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink className="contact-link" exact ="true" activeClassName="active" to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/annapeysikova">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/anpey21">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}


export default SideBar;

