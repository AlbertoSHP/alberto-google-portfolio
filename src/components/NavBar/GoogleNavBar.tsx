import { useBreakpoint } from '../../hooks/useBreakpoint';
import './GoogleNavBar.scss';
import MobileGoogleNavBar from './MobileGoogleNavBar/MobileGoogleNavBar';
import StandardGoogleNavBar from './StandardGoogleNavBar';

const GoogleNavBar = () => {
  const { isSmallMobile } = useBreakpoint();

  return (
      isSmallMobile ? <MobileGoogleNavBar /> : <StandardGoogleNavBar />
    
  )
}

export default GoogleNavBar
