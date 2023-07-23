import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../../config/store";
import { useEffect } from "react";
import { fetchMovieDetail } from "../slice/movie-slice";

const MovieDetail = () => {
  const params = useParams();
  const movie = useSelector((state: RootState) => state.movieSlice.detail);
  const loading = useSelector((state: RootState) => state.movieSlice.loading);

  const dispatch = useDispatch<AppDispatch>();
  console.log("movie", movie);

  useEffect(() => {
    dispatch(
      fetchMovieDetail({
        id: params.id as string,
      })
    );
  }, []);
  return (
    <div className="flex w-full  flex-row md:px-0 px-6 md:py-20 py-10">
      {loading == "pending" ? (
        <div>...loading</div>
      ) : (
        <div className="md:w-3/4 md:mx-auto md:grid flex flex-col  md:gap-x-4 md:grid-cols-3 ">
          <div className="md:col-span-2">
            <img
              className="rounded-lg object-cover md:w-full md:h-3/4 h-full
            "
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="md:col-span-1">
            <h1 className="md:text-4xl font-bold text-base">{movie?.title}</h1>
            <p className="text-xs text-gray-400">{"release date"}</p>
            <p className="text-gray-400 text-base">
              {" "}
              {movie?.release_date?.toString()}
            </p>
            <div className="flex md:mt-4 mt-2  items-center">
              <h1 className="text-2xl font-bold text-yellow-700">
                {movie?.vote_average?.toString()}
              </h1>
              <p className="text-xs md:ml-2 flex flex-row items-center">
                <span className="text-gray-300 text-base">
                  {"  / "}
                  {movie?.vote_count?.toString()}
                </span>
                <span className="ml-1 text-xs text-gray-400">
                  Users Reviews
                </span>
              </p>
            </div>
            <div className="md:mt-4 mt-2">
              <p className="text-base font-bold leading-5">Description</p>
              <p className="md:text-xs text-gray-400 text- md:mt-3 text-xs">
                {movie?.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
