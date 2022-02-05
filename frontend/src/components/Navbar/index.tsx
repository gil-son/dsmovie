import {ReactComponent as GithubIcon} from "assets/img/github.svg"; // tsconfig.json "baseUrl": "./src"
import { useState, useEffect } from "react";
import "./styles.css";
import {useSelector, useDispatch} from 'react-redux';


function NavBar(){

  //const[title, setTitle] = useState("");
  
  //const title = useSelector( (state) => state);
  //const dispatch = useDispatch();
  //console.log("title nav: ", title)

  function ClickedBrazil(){
    //dispatch( {type: "brazil"});
    localStorage.setItem("theTitle", "brazil");
    // document.location.reload();
  }

  function ClickedSpanish(){
    //dispatch( {type: "spanish"});
    localStorage.setItem("theTitle", "spanish");
    // document.location.reload();
  }

  function ClickedRemove(){
    //dispatch( {type: "english"});
    localStorage.setItem("theTitle", "english");
    // document.location.reload();

  }

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
            <button onClick={ClickedRemove} >english</button>
            <button onClick={ClickedBrazil} >brazil</button>
            <button onClick={ClickedSpanish} >spanish</button>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;