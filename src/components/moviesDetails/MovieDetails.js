import { useContext, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useParams,Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";

function MovieDetails(props) {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const {language} = useContext(LanguageContext)
  useEffect(() => {
    axiosInstance.get(`/3/movie/${movieId}`,{params:{language:language}}).then((result) => {
      let data = result.data;
      //view only the year section of release date
      data.release_date = data.release_date.slice(0, 4);

      setMovieDetails(data);
    });
  }, [language,movieId]);

  return (
    <>
      <div className="hero min-h-screen bg-sky-900 rounded-xl text-black ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
         alt = {movieDetails.title} />
          <div>
            <h1 className="text-5xl  font-bold">
              {movieDetails.title} ({movieDetails.release_date})
            </h1>
            <div className="stats shadow mt-5 ">
              <div className="stat bg-sky-400 text-black">
                <div className="stat-title ">Rating</div>
                <div className="stat-value">{movieDetails.vote_average}</div>
              </div>
            </div>
            <div className="py-6 flex flex-col">
              <h2 className="font-bold text-lg ">Overview</h2>
              <p>{movieDetails.overview}</p>
            </div>
            <Link className="btn bg-sky-400 text-black" to={'/'}>
              Back to Movies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
