import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import './App.css';
 import SimpleBottomNavigation from './components/MainNav.js';
import { Container } from '@mui/system';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
    <div className="App">
      <Container>
       

        
      </Container>
    </div>
      <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
