import { Stack, Typography } from '@mui/material'
import { useBreakpoint } from '../../../hooks/useBreakpoint';

interface ProfileItemProps {
    iconName: string;
    label: string;
    borderStyle: 'top' | 'bottom' | 'all';
    handleClick: () => void;
    endDecorator?: React.ReactNode;
}

const ProfileItem = ({ iconName, label, borderStyle, handleClick, endDecorator }: ProfileItemProps) => {
    const { isMobile } = useBreakpoint();
  return (
    <Stack direction={'row'} alignItems={'center'} height={isMobile ? '50px' : '60px'}
        onClick={handleClick}
        sx={{
            padding: "0 16px",
            width: '100%',
            cursor: 'pointer',
            "&:hover": { backgroundColor: '#86a3bb3d' },
            backgroundColor: '#fff',
            borderRadius: borderStyle === 'top' ? '20px 20px 0 0' : borderStyle === 'bottom' ? '0 0 20px 20px' : '20px',
        }}
    >
        <Stack sx={{ width: '100%'}} direction={'row'} spacing={1} alignItems={'center'}>
            <span className="material-icons">{iconName}</span>
            <Typography variant='body2' fontWeight={500}>{label}</Typography>
        </Stack>
        {endDecorator}
    </Stack>
  )
}

export default ProfileItem
