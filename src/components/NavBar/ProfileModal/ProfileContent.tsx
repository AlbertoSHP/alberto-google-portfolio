import { Avatar, Box, Stack, Typography } from '@mui/material'
import ProfileElements from './ProfileElements'
import { useNavbarTranslations } from '../../../i18n/useTranslations'
import { useBreakpoint } from '../../../hooks/useBreakpoint';
import RainbowEffectAvatarLayout from '../../../shared/components/RainbowEffectAvatarLayout';

const ProfileContent = () => {
  const { t } = useNavbarTranslations();
  const { isMobile } = useBreakpoint();

  return (
    <Box
      data-testid="profile-content-box"
      sx={{
        width: isMobile ? '100%' : "436px",
        borderRadius: "28px",
        backgroundColor: "#cedfed",
        padding: "16px"
    }}>
        <Stack direction={'column'} spacing={2} alignItems={'center'} justifyContent={'center'} sx={{
            overflowY: 'auto',
            overflowX: 'hidden',
        }}>
          <RainbowEffectAvatarLayout>
            <Avatar
                src={'/images/default/AvatarImageSmall.png'}
                sx={{
                    width: '96px',
                    height: '96px',
                    fontSize: '40px',
                }}
            />
          </RainbowEffectAvatarLayout>
           <Typography fontSize={{ xs: '0.8rem', md: '1rem' }} fontWeight={600}>{t('profile.firstTitle')}</Typography>
           <Typography variant='h5' fontSize={{ xs: '0.8rem' }}>{t('profile.secondTitle')}</Typography>
           <ProfileElements />
        </Stack>
    </Box>
  )
}

export default ProfileContent
