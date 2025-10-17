import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useFooterTranslations } from '../../i18n/useTranslations';
import AboutMeModal from '../FooterBar/AboutMeModal';
import { useState } from 'react';

const GoogleFooterBar = () => {
  const { i18n } = useTranslation();
  const { t } = useFooterTranslations();
  const [openAboutMeModal, setOpenAboutMeModal] = useState(false);

  return (
    <Stack justifyContent={'space-between'} padding={"15px 20px"} flexDirection={'row'} sx={{
        background: "#cedfed4a"
      }}>
      <Box
        className="footer-item" sx={{
        display: 'flex',
        }}
      >
        <Typography fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}>
          {i18n.language.split("-")[1] && t('language.languageDetected')}&nbsp;
          {
            i18n.language.split("-")[0] === 'en' ? t('language.english') :
            i18n.language.split("-")[0] === 'de' ? t('language.german') :
            i18n.language.split("-")[0] === 'es' ? t('language.spanish') :
            i18n.language.split("-")[0] === 'fr' ? t('language.french') :
            null
          }
        </Typography>
      </Box>
      <Box
        onClick={() => setOpenAboutMeModal(true)}
        sx={{
          '&:hover': {textDecoration: 'underline',
          cursor: 'pointer'
        }}}>
          <Typography fontSize={{xs: '0.8rem', sm: '0.8rem', md: '1rem'}}>{t('about.aboutMe')}</Typography>
      </Box>
      <AboutMeModal open={openAboutMeModal} onClose={() => setOpenAboutMeModal(false)} />
    </Stack>
  )
}

export default GoogleFooterBar
