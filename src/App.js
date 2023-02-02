import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';
 import SimpleBottomNavigation from './components/MainNav.js';
import { Container } from '@mui/system';
import Trending from './components/Trending/trending';
import Movies from './components/Movies/Movies';
import Series from './components/Series/Series';
import Search from './components/Search/Search';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
    
       <Routes>
        <Route path='/' element={<Trending/>} exact/>
        <Route path='/movies' element={<Movies/>} />
        <Route path='/series' element={<Series/>} />
        <Route path='/search' element={<Search/>} />
       </Routes>

        
      </Container>
    </div>
      <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
