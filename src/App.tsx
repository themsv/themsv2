import { MantineProvider, createTheme } from '@mantine/core';
import Layout from './components/Layout';
import '@mantine/core/styles.css';

const theme = createTheme({
  fontFamily: 'Nunito Sans'
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Layout />
    </MantineProvider>
  );
}

export default App;
