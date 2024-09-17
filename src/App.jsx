
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import styles from "./App.module.css"

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReview = lazy(() => import('./components/MovieReview/MovieReview'))
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

const App = () => {
  

  return (
    <div className={styles.app}>
      <Navigation/>
      <Suspense fallback={<Loading/>}>
      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />        
        <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReview/>}  />
        </Route >
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App

