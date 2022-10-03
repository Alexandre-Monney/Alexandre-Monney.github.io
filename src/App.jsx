import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import { Grid } from '@mui/material';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <Grid container display={'flex'} flexDirection={'column'} justifyContent={'space-between'} minHeight={'95vh'}>
      <Grid item>
        <Navbar />
      </Grid>
      <Grid item flexGrow={1}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
