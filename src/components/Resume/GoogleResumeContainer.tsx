import { Stack } from '@mui/material';
import GoogleResultTypeContainer from './GoogleResultTypeContainer';

const GoogleResumeContainer = () => {

  return (
    <Stack sx={{
        flexGrow: 1,
        backgroundColor: 'transparent',
    }}>
      <GoogleResultTypeContainer />
    </Stack>
  )
}

export default GoogleResumeContainer
