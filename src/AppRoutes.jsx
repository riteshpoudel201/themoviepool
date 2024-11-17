import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";
const DiscoverMovies = lazy(() => import("./pages/DiscoverMovies"));
const DiscoverSeries = lazy(() => import("./pages/DiscoverSeries"));
const Movies = lazy(() => import("./pages/Movies"));
const Series = lazy(() => import("./pages/Series"));
const ShowDetails = lazy(() => import("./pages/ShowDetails"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/discover/movies"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DiscoverMovies />
          </Suspense>
        }
      />
      <Route
        path="/discover/series"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <DiscoverSeries />
          </Suspense>
        }
      />
      <Route
        path="/movies"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Movies />
          </Suspense>
        }
      />
      <Route
        path="/series"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Series />
          </Suspense>
        }
      />
      <Route
        path="/show/:type/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ShowDetails />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound  />} />
    </Routes>
  );
};

export default AppRoutes;
