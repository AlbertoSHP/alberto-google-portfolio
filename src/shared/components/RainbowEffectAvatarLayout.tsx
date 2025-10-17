import { Box } from "@mui/material";

interface RainbowEffectAvatarLayoutProps {
    children?: React.ReactNode;
}

const RainbowEffectAvatarLayout = ({ children }: RainbowEffectAvatarLayoutProps) => {
  return (
    
          <Box sx={{
            background: 'conic-gradient(red, yellow, green, blue, red)',
            padding: '4px',
            borderRadius: '50%',
            position: 'relative',
          }}>
            <Box sx={{
                position: 'absolute',
                top: 2,
                left: 2,
                right: 2,
                bottom: 2,
                backgroundColor: '#fff',
                borderRadius: '50%',
                border: '1px solid white'
            }} />
            {children}
          </Box>
  )
}

export default RainbowEffectAvatarLayout
