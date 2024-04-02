import { MantineProvider, createTheme  } from '@mantine/core';
import Layout from './components/layout/Layout';
import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/about';
import Blogs from './components/pages/Blogs';
import Home from './components/pages/home';

const theme = createTheme({
  fontFamily: 'Nunito Sans',
  
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
