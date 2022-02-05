import MovieScore from "components/MovieScore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import {useSelector, useDispatch} from 'react-redux';

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        setDispatchS();
        setDispatchE();
        setDispatchB();
        
    }, []);


    function setDispatchB(){
        dispatch({ type: "brazil"});
    }

    function setDispatchS(){
       dispatch({ type: "spanish"});
    }     

    function setDispatchE(){
        dispatch({ type: "english"});
        
    }

    let ss =  {titleReducer: "spanish"};
    let bb =  {titleReducer: "brazil"};
    let ee =  {titleReducer: "english"};

   const theState = useSelector( function(state){ return state});
   console.log("ee", ee)
   console.log("bb", bb)
   console.log("ss", ss)
   console.log("theState", theState)

  //console.log("title card: ", title)

  const title = useSelector( function(state){ return state});
  //var title = localStorage.getItem("theTitle");

  var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
  var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
  var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                {verifyEnglish && <h3>{movie.title}</h3>}
                {verifyBrazil && <h3>{movie.titleBrazil}</h3>}
                {verifySpanish && <h3>{movie.titleSpanish}</h3>}
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Evaluate</div>
                </Link>
            </div>
        </div>
    )
}



export default MovieCard;