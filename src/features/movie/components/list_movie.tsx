import React, { Suspense } from "react";
import MovieModel from "../model/movie_model";

const MovieCard = React.lazy(() => import("./movie_card"));
interface ListMovieProps {
  listMovie: MovieModel[];
}
const ListMovie = (props: ListMovieProps) => {
  return (
    <div>
      <div className="flex overflow-x-auto  no-scrollbar space-x-8 w-screen bg-gray-shade700">
        {/* <div className="flex-none w-14 h-14">01</div>
          <div className="flex-initial w-64 ...">02</div>
          <div className="flex-initial w-32 ...">03</div> */}
        {props.listMovie.map((e) => (
          <Suspense fallback={<div>..</div>}>
            <MovieCard movie={e} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
