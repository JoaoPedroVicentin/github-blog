import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { IssuesProvider } from "./context/IssuesContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </IssuesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
