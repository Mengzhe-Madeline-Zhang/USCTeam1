import MovieList from './compoent/MovieList';
import Home from './Pages/Home';
import LikePage from './Pages/LikePage';
import BlockPage from './Pages/BlockPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/movielist' element={<MovieList/>}/>
        <Route exact path='/likepage' element={<LikePage />} />
        <Route exact path='/blockpage' element={<BlockPage />}/>
      </Routes>
    </div>


  );
}

export default App;
