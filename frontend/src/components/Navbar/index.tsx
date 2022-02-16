import {ReactComponent as GithubIcon} from "assets/img/github.svg"; // tsconfig.json "baseUrl": "./src"
import {ReactComponent as BrazilFlag} from "assets/img/br.svg";
import {ReactComponent as SpanishFlag} from "assets/img/es.svg";
import {ReactComponent as JapanFlag} from "assets/img/jp.svg";
import {ReactComponent as UnitedStatesFlag} from "assets/img/us.svg";
import {useDispatch} from 'react-redux';
import "./styles.css";



function NavBar(){
  
  const dispatch = useDispatch();

  function ClickedBrazil(){
    dispatch( {type: "brazil"});
  }

  function ClickedSpanish(){
    dispatch( {type: "spanish"});
  }

  function ClickedEnglish(){
    dispatch( {type: "english"});
  }

  function ClickedJapan(){
    dispatch( {type: "japan"});
    
  }

    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            
            
            <div className="dsmovie-contact-container-center">
              <div className="dsmovie-flag-container">
                  <BrazilFlag onClick={ClickedBrazil} />
                  ........
                </div>
                <div className="dsmovie-flag-container">
                  <UnitedStatesFlag onClick={ClickedEnglish} />
                  ........
                  
                </div>
                <div className="dsmovie-flag-container">
                  <SpanishFlag onClick={ClickedSpanish} />  
                  ........
                </div>

                <div className="dsmovie-flag-container">
                  <JapanFlag onClick={ClickedJapan} />  
                  ........
                </div>
              </div>
            
              <div className="dsmovie-contact-container">
            <a href="https://github.com/gil-son/dsmovie" target="_blank" rel="noreferrer">
              
                <GithubIcon />
                
              
            </a>
            </div>
          </div>
        </nav>
      </header>
    );
}


export default NavBar;