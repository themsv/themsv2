import { MantineProvider, createTheme  } from '@mantine/core';
import Layout from './components/layout/Layout';
import '@mantine/core/styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';

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
      <Layout />
    </MantineProvider>
  );
}

export default App;
