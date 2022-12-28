import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Navbar from './components/Navbar';
import TvSeries from './pages/TvSeries';
import Bookmarked from './pages/Bookmarked';


function App() {
  return (
    <>
    
    <Router>
      <GlobalContainer>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/tv-series" element={<TvSeries/>}/>
          <Route path="/bookmarks" element={<Bookmarked />}/>
      </Routes>
      </GlobalContainer>
    
    </Router>
      
      
    </>
  );
}

export default App;

const GlobalContainer = styled.div`
padding:25px;
box-sizing:border-box;
background-color:#10141e;
width:100%;
display:flex;

`



