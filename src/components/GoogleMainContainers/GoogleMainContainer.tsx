import { Box, useTheme } from '@mui/material'
import GoogleNavBar from '../NavBar/GoogleNavBar'
import GoogleFooterBar from './GoogleFooterBar'
import GoogleAppRouter from '../../routes/GoogleAppRouter'

const GoogleMainContainer = () => {
  const { palette } = useTheme();

  return (
    <Box
      id='google-main-container'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: palette?.background?.default,
    }}>
        <GoogleNavBar />
        <GoogleAppRouter />
        <GoogleFooterBar />
    </Box>
  )
}

export default GoogleMainContainer
