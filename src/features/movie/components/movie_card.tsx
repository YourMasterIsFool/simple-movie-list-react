import { useNavigate } from "react-router-dom";
import MovieModel from "../model/movie_model";

const MovieCard = ({ movie }: { movie: MovieModel }) => {
  const navigate = useNavigate();

  function movieClick() {
    console.log("movie click");
    navigate("/movie/" + movie.id);
  }

  return (
    <div onClick={movieClick} className="movie-card flex flex-col items-start">
      <img
        className="mx-auto md:w-64 md:h-64 w-32 h-32 md:mb-4 mb-2  bg-gray-200 object-cover rounded-lg"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      ></img>
      <div className="md:w-40 w-36 p-4 md:p-0 items-start  w-full h-full flex flex-col justify-between">
        <div>
          <div className="movie-card-title line-clamp-2">{movie.title}</div>
          <p className="movie-card-date">
            {movie.release_date?.toString() ?? ""}
          </p>
        </div>
        {/* <div className="movie-card-subtitle">{e.overview}</div> */}

        <div className="mt-4">
          <p className="text-xs">Rating</p>
          <div className="movie-card-rating">
            {movie.vote_average?.toString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
