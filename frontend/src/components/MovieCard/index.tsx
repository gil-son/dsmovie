import MovieScore from "components/MovieScore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import {useSelector, useDispatch} from 'react-redux';

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        setDispatchJ();
        setDispatchS();
        setDispatchE();
        setDispatchB(); // the last, is the first to appear
        

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

    function setDispatchJ(){
        dispatch({ type: "japan"});
    }

    let ss =  {titleReducer: "spanish"};
    let bb =  {titleReducer: "brazil"};
    let ee =  {titleReducer: "english"};
    let jj =  {titleReducer: "japan"};

   const theState = useSelector( function(state){ return state});
   console.log("ee", ee)
   console.log("bb", bb)
   console.log("ss", ss)
   console.log("jj", jj)
   console.log("theState", theState)


  var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
  var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
  var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);
  var verifyJapan = JSON.stringify(jj) === JSON.stringify(theState);

   console.log("ee", verifySpanish)
   console.log("bb", verifyBrazil)
   console.log("ss", verifyEnglish)
   console.log("jj", verifyJapan)

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                {verifyEnglish && <h3>{movie.title}</h3>}
                {verifyBrazil && <h3>{movie.titleBrazil}</h3>}
                {verifySpanish && <h3>{movie.titleSpanish}</h3>}
                {verifyJapan && <h3>{movie.titleJapan}</h3>}
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">
                        
                        {verifyEnglish && <>Evaluate</>}
                        {verifyBrazil && <>Avaliar</>}
                        {verifySpanish && <>Para evaluar</>}
                        {verifyJapan && <>評価します</>}
                    
                    </div>
                </Link>
            </div>
        </div>
    )
}



export default MovieCard;