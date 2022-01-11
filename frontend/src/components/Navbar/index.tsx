import {ReactComponent as GithubIcon} from "assets/img/github.svg"; // tsconfig.json "baseUrl": "./src"
import "./styles.css";

function NavBar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/gil-son/dsmovie" target="_blank" rel="noreferrer">
              <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/gil-son</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;