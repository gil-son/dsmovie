import MovieScore from "components/MovieScore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    
    const[title, setTitle] = useState(0);

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                {title === 0 && <h3>{movie.title}</h3>}
                {title === 1 && <h3>{movie.titleBrazil}</h3>}
                {title === 2 && <h3>{movie.titleSpanish}</h3>}
                <MovieScore count={movie.count} score={movie.score} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Evaluate</div>
                </Link>
            </div>
        </div>
    )
}



export default MovieCard;