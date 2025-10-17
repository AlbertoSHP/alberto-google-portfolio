import { THEME_ID, ThemeProvider } from '@mui/material';
import { GoogleLightPortfolioTheme } from './shared/styles/GooglePortfolioTheme.tsx';
import { CssBaseline, CssVarsProvider as JoyCssVarsProvider } from '@mui/joy';
import GoogleMainContainer from './components/GoogleMainContainers/GoogleMainContainer.tsx';

function App() {

  return (
    <ThemeProvider theme={{ [THEME_ID]: GoogleLightPortfolioTheme }}>
      <JoyCssVarsProvider >
        <CssBaseline />
        <GoogleMainContainer />
      </JoyCssVarsProvider>
    </ThemeProvider>
  )
}

export default App
