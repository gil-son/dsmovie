import MovieStars from "components/MovieStars";
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import "./styles.css";

// https://pt.stackoverflow.com/questions/347616/problema-com-condicional-no-react

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count } : Props) {

    
    useEffect(() => {
        
        setVerify();
        

    }, []);

    function setVerify(){

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

    return (
        <div className="dsmovie-score-container">
             <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
             <MovieStars score={score} />
             
             {count <= 1 && verifyEnglish && <p className="dsmovie-score-count">{count} valuation</p>}
             {count > 1 && verifyEnglish && <p className="dsmovie-score-count">{count} valuations</p>}

             {count <= 1 && verifySpanish && <p className="dsmovie-score-count">{count} evaluación</p>}
             {count > 1 && verifySpanish && <p className="dsmovie-score-count">{count} evaluaciones</p>}

             {count <= 1 && verifyBrazil && <p className="dsmovie-score-count">{count} avaliação</p>}
             {count > 1 && verifyBrazil && <p className="dsmovie-score-count">{count} avaliações</p>}

             {count <= 1 && verifyJapan && <p className="dsmovie-score-count">{count} 評価</p>}
             {count > 1 && verifyJapan && <p className="dsmovie-score-count">{count} 評価</p>}
         </div>
    )
} 

export default MovieScore;