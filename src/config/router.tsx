import React, { Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ApiProvider } from "../ApiProvider";

const MovieListPage = React.lazy(
  () => import("../features/movie/pages/movie_list_page")
);

const MovieDetailPage = React.lazy(
  () => import("../features/movie/pages/movie_detail")
);
const MovieSearch = React.lazy(
  () => import("../features/movie/pages/movie_search")
);

const router = createBrowserRouter([
  {
    element: <ApiProvider />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>loading</div>}>
            <MovieListPage />
          </Suspense>
        ),
      },

      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<div>loading</div>}>
            <MovieDetailPage />
          </Suspense>
        ),
      },

      {
        path: "/search",
        element: (
          <Suspense fallback={<div>loading</div>}>
            <MovieSearch />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
