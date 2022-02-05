import MovieScore from "components/MovieScore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";


type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    

  //console.log("title card: ", title)

  var title = localStorage.getItem("theTitle");

    useEffect(() => {

        
       

    }, [title]);




    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                {title === "english" && <h3>{movie.title}</h3>}
                {title === "brazil" && <h3>{movie.titleBrazil}</h3>}
                {title === "spanish" && <h3>{movie.titleSpanish}</h3>}
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Evaluate</div>
                </Link>
            </div>
        </div>
    )
}



export default MovieCard;