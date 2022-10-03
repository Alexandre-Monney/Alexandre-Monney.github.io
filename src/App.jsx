import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import { Grid } from '@mui/material';
import About from './components/About/About';
import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <Grid
      className={darkMode ? 'dark-mode' : 'light-mode'}
      container
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      minHeight={'100vh'}
      p={'1rem 0.5rem'}
    >
      <Grid item>
        <Navbar changeTheme={switchDarkMode} theme={darkMode} />
      </Grid>
      <Grid item flexGrow={1}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About theme={darkMode} />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
