import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../config/store";
import {
  fetchMovieList,
  fetchMoviesPopuler,
  fetchMoviesTopRated,
  fetchMoviesUpcoming,
  incrementHandler,
} from "../slice/movie-slice";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MovieModel from "../model/movie_model";
import PopularMovie from "../components/list_movie";
import ListMovie from "../components/list_movie";
import MovieCard from "../components/movie_card";

const MovieSearch = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const movies = useSelector((state: RootState) => state.movieSlice.movies);

  function searchMovies() {
    dispatch(
      fetchMovieList({
        params: {
          query: searchParams.get("search"),
        },
      })
    );
  }

  useEffect(() => {
    searchMovies();
  }, [searchParams.get("search")]);

  return (
    <div className="p-6 w-screen md:p-8">
      <div className="md:mt-8 mt-4">
        <h1 className="text-2xl">Total Result: {movies.length} </h1>
        <div className="grid md:mt-4 mt-2 md:grid-cols-4 grid-cols-2 md:gap-x-8 md:gap-y-6 md:gap-0 gap-4">
          {movies?.map((e) => (
            <>
              <Suspense fallback={<div>loading..</div>}>
                <MovieCard movie={e} />
              </Suspense>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
