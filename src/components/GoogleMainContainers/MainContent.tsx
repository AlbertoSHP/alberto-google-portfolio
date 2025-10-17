import { Box } from '@mui/material'
import GoogleImage from '../Search/GoogleImage'
import GoogleSearchBar from '../Search/GoogleSearchBar'
import GoogleFillingContent from '../Search/GoogleFillingContent'
import { useBreakpoint } from '../../hooks/useBreakpoint'

const MainContent = () => {
  const { isMobile } = useBreakpoint()

  return (
    <Box key={isMobile ? 'mobile' : 'desktop'} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexDirection: 'column',
        padding: '0 8px',
    }}>
        <GoogleImage />
        <GoogleSearchBar />
        <GoogleFillingContent />
    </Box>
  )
}

export default MainContent
