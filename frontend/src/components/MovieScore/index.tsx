import MovieStars from "components/MovieStars";
import "./styles.css";

// https://pt.stackoverflow.com/questions/347616/problema-com-condicional-no-react

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {


    return (
        <div className="dsmovie-score-container">
             <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
             <MovieStars score={score} />
             
             {count === 0 && <p className="dsmovie-score-count">{count} valuation</p>}
             {count > 0 && <p className="dsmovie-score-count">{count} valuations</p>}
         </div>
    )
} 

export default MovieScore;