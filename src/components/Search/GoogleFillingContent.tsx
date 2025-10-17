import { Box, Stack } from '@mui/material';
import TipSearchComponent from '../../shared/components/TipSearchComponent';

const GoogleFillingContent = () => {

  return (
    <Box sx={{
        flexGrow: 0.2,
        flexShrink: 0,
        boxSizing: 'border-box',
        width: '100%'
    }}>
      <Stack direction={'column'} spacing={1} justifyContent={'center'} alignItems={'center'}>
        <TipSearchComponent />
      </Stack>
    </Box>
  )
}

export default GoogleFillingContent
