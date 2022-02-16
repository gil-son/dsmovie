 import axios, { AxiosRequestConfig } from 'axios';
 import { useEffect, useState } from 'react';
 import { Link, useNavigate } from 'react-router-dom';
 import { Movie } from 'types/movie';
 import { BASE_URL } from 'utils/requests';
 import { validateEmail } from 'utils/validate';
 import {useSelector} from 'react-redux';
 import './styles.css';

 type Props = {
     movieId : string;
 }

 function FormCard( { movieId } : Props) {

     const navigate = useNavigate();

     const [movie, setMovie] = useState<Movie>();

     useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        });
    }


        let ss =  {titleReducer: "spanish"};
        let bb =  {titleReducer: "brazil"};
        let ee =  {titleReducer: "english"};
        let jj =  {titleReducer: "japan"};

        const theState = useSelector( function(state){ return state});

        var verifySpanish = JSON.stringify(ss) === JSON.stringify(theState);
        var verifyBrazil = JSON.stringify(bb) === JSON.stringify(theState);
        var verifyEnglish = JSON.stringify(ee) === JSON.stringify(theState);
        var verifyJapan = JSON.stringify(jj) === JSON.stringify(theState);

     return (
         <div className="dsmovie-form-container">
             <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
             <div className="dsmovie-card-bottom-container">
                 <h3>
                     {movie?.title}
                 </h3>
                 <form className="dsmovie-form" onSubmit={handleSubmit}>
                     <div className="form-group dsmovie-form-group">
                         <label htmlFor="email">
                             
                             {verifyEnglish && <>Inform your email</>}
                             {verifySpanish && <>informar a su correo electrónico</>}
                             {verifyBrazil && <>Informe o seu email</>}
                             {verifyJapan && <>あなたの電子メールを知らせなさい</>}
                         
                         </label>
                         <input type="email" className="form-control" id="email" />
                     </div>
                     <div className="form-group dsmovie-form-group">
                         <label htmlFor="score">Inform your evaluate</label>
                         <select className="form-control" id="score">
                             <option>1</option>
                             <option>2</option>
                             <option>3</option>
                             <option>4</option>
                             <option>5</option>
                         </select>
                     </div>
                     <div className="dsmovie-form-btn-container">
                         <button type="submit" className="btn btn-primary dsmovie-btn">Save</button>
                     </div>
                 </form >
                 <Link to="/">
                     <button className="btn btn-primary dsmovie-btn mt-3">Cancel</button>
                 </Link>
             </div >
         </div >
     );
 }

 export default FormCard;