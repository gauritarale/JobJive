import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@mantine/core/styles.css';
import { Slider } from '@mantine/core';

import { HeadlessMantineProvider, MantineProvider, MantineThemeProvider } from '@mantine/core'
import HomePage from './Pages/HomePage';

function App() {

  return (
    <MantineProvider>
    <HomePage/>

    </MantineProvider>
  );
}
export default App
