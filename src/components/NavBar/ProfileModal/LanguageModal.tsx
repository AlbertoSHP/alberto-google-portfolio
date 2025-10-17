import { Box, MenuItem, Modal, Select, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavbarTranslations } from '../../../i18n/useTranslations';

interface LanguageModalProps {
  openLanguageModal: boolean;
  onClose: () => void;
}

const LenguageModal = ({ openLanguageModal, onClose }: LanguageModalProps) => {
  const { i18n } = useTranslation()
  const { t } = useNavbarTranslations();

  return (
    <Modal
          open={openLanguageModal}
          onClose={onClose}
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: '#cedfed',
            borderRadius: '28px',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" component="h2" mb={2}>
              {t('profile.selectLanguage')}
            </Typography>
            <Select
              sx={{
                backgroundColor: 'white'
              }}
              id='select-language'
              value={i18n.language.split("-")[0]}
              fullWidth
              onChange={(e) => {
                const selectedLang = e.target.value;
                i18n.changeLanguage(selectedLang);
                onClose();
              }}
            >
              <MenuItem value="en"><Stack sx={{width: '100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}><span>English</span><img width={30} height={30} src="https://flagsapi.com/GB/flat/64.png" /></Stack></MenuItem>
              <MenuItem value="de"><Stack sx={{width: '100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}><span>Deutsch</span><img width={30} height={30} src="https://flagsapi.com/DE/flat/64.png" /></Stack></MenuItem>
              <MenuItem value="es"><Stack sx={{width: '100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}><span>Español</span><img width={30} height={30} src="https://flagsapi.com/ES/flat/64.png" /></Stack></MenuItem>
              <MenuItem value="fr"><Stack sx={{width: '100%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}><span>Français</span><img width={30} height={30} src="https://flagsapi.com/FR/flat/64.png" /></Stack></MenuItem>
            </Select>
          </Box>
    </Modal>
  )
}

export default LenguageModal
