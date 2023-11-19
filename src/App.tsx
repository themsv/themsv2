import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";
import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider>
      <Layout />
    </MantineProvider>
  );
}

export default App;
