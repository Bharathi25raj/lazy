import './App.css';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Testimonial from './Pages/Testimonial';
// import Product from './Pages/Product';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar';
// import { Suspense, lazy } from 'react';
import HoCA from './Components/CompA';
// const Product = lazy(() => import('./Pages/Product'))
// const About = lazy(() => import('./Pages/About'));
// const Testimonial = lazy(() => import('./Pages/Testimonial'));


function App() {

  // const [movies, setMovies] = useState([]);

  // function handleMovies() {
  //   import('./data.js').then((module) => {      //Dynamic import
  //     setMovies(module.default)     //default export, module.moviesData in case of named export
  //   })
  // }
  
  return (
    <>
      {/* <h3>Movies</h3>
      <button onClick={handleMovies}>Show Movies</button>
      <div>
        {
          movies.map((movie) => (
            <div>{movie.name}</div>
          ))
        }
      </div> */}

      {/* <Suspense fallback={<h2>...Loading</h2>}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/product' element={<Product />}></Route>
            <Route path='/testimonial' element={<Testimonial />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense> */}

      <HoCA yellow/>
      <HoCA dark/>
      
    </>
  );
}

export default App;
