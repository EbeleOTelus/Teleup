import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';
 import SimpleBottomNavigation from './components/MainNav.js';
import { Container } from '@mui/system';
import Trending from './components/Trending/Trending';
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
        <Route path='/' component={Trending} exact/>
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/search' component={Search} />
       </Routes>

        
      </Container>
    </div>
      <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
