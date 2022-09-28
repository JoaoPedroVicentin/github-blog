import { ThemeProvider } from "styled-components";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Blog } from "./pages/Blog";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Blog />
    </ThemeProvider>
  )
}

export default App
