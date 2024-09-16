
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
//import HomePage from "./pages/HomePage/HomePage";
//import PostPage from "./pages/PostPage/PostPage";
//import PostDetails from "./pages/PostDetails/PostDetails";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReview = lazy(() => import('./components/MovieReview/MovieReview'))

const App = () => {
  

  return (
    <div>
      <Navigation/>
      <Suspense fallback={<Loading/>}>
      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />        
        <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="cast" element={<MovieCast/>} />
            <Route path="reviews" element={<MovieReview/>}  />
        </Route >
      </Routes>
      </Suspense>
    </div>
  );
};

export default App

