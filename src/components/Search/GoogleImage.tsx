import { Box } from "@mui/material";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import MainAlbertoImage from '/images/default/GoogleMainImage.png';
import { useAppNavigate } from "../../hooks/useAppNavigate";

const GoogleImage = () => {
  const { updateQueryParams, isCVPage } = useAppNavigate();
  const { isMobile, isTablet, isLargeMobile } = useBreakpoint();

  return (
    <Box
      className='portfolio-logo'
      onClick={() => isCVPage ? updateQueryParams({tab: null, search: null, id: null},{ path: '/', replace: true }) : null}
      sx={{
        cursor: isCVPage ? 'pointer' : 'default',
        width: isCVPage ? '240px' : (isMobile || isTablet ? 'inherit' : '658px'),
        display: isCVPage && (isLargeMobile || isTablet) ? 'none' : 'block'
      }}>
      <img width={'100%'} height={'100%'} style={{objectFit: 'fill'}} src={MainAlbertoImage} alt="Google" />
    </Box>
  )
}

export default GoogleImage
