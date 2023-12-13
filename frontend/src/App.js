import logo from './logo.svg';
import './App.css';
import Pivot from './components/Pivot';
import { VerticalLayout } from './components/layout';
import { ThemeProvider } from '@mui/material/styles';
import {createTheme } from './theme';





function App() {
  const theme = createTheme({
    colorPreset: 'blue',
    contrast: 'light',
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <VerticalLayout>
      {/* <Pivot/> */}
      </VerticalLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;



