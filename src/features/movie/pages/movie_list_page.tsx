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
import MovieSearch from "./movie_search";

const MovieListPage = () => {
  const count = useSelector((state: RootState) => state.movieSlice.count);
  const popularMovies = useSelector(
    (state: RootState) => state.movieSlice.popularMovies
  );

  const { topRated, upcomingMovies, movies } = useSelector(
    (state: RootState) => state.movieSlice
  );

  const loading = useSelector((state: RootState) => state.movieSlice.loading);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // function searchMovies() {
  //   dispatch(
  //     fetchMovieList({
  //       params: {
  //         query: searchParams.get("search"),
  //       },
  //     })
  //   );
  // }

  useEffect(() => {
    dispatch(fetchMoviesPopuler());
    dispatch(fetchMoviesTopRated());
    dispatch(fetchMoviesUpcoming());
  }, []);

  function onMovieCardClick(id: any) {
    navigate("/" + id);
  }
  console.log(movies);

  return (
    <div className="p-6 w-screen md:p-8">
      {loading == "pending" ? (
        <div>...loading</div>
      ) : (
        <div>
          <h1 className="text-2xl">Upcoming Movies</h1>

          <div>
            <ListMovie listMovie={upcomingMovies} />
          </div>

          <div className="md:mt-8 mt-4">
            <h1 className="text-2xl">Top Rated Movies</h1>
            <div className="">
              <ListMovie listMovie={topRated} />
            </div>
          </div>
          <div className="md:mt-8 mt-4">
            <h1 className="text-2xl">Popular Movies</h1>
            <div className="grid md:mt-4 mt-2 md:grid-cols-4 grid-cols-2 md:gap-x-8 md:gap-y-6 md:gap-0 gap-4">
              {popularMovies.map((e) => (
                <>
                  <Suspense fallback={<div>loading..</div>}>
                    <MovieCard movie={e} />
                  </Suspense>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieListPage;
