import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';
import { Slider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HeadlessMantineProvider, MantineProvider, MantineThemeProvider } from '@mantine/core'
import HomePage from './Pages/HomePage';
import FindJobs from './FindJobs/FindJobs'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {

  const colors = {
  brightSun: {
    50:  '#fffbeb',
    100: '#fff3c6',
    200: '#ffe588',
    300: '#ffd149',
    400: '#ffbd20',
    500: '#f99b07',
    600: '#dd7302',
    700: '#b75006',
    800: '#943c0c',
    900: '#7a330d',
    950: '#461902',
  },
  mineShaft: {
    50:  '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#6d6d6d',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#3d3d3d',
    950: '#2d2d2d',
  },
  fontFamily:"poppins, sans-serif "
};
 return (
    <MantineProvider defaultColorScheme='dark' theme={this}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/find-jobs" element={<FindJobs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </MantineProvider>
  );
}
export default App