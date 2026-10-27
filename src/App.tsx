import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./components/Layout/LayoutComponents/Header/Header";
import Router from "./router";
import { ThemeProvider } from "./components/Layout/LayoutComponents/PageTheme/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
