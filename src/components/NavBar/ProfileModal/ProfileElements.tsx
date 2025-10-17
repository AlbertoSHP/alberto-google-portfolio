import { Stack } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavbarTranslations } from '../../../i18n/useTranslations';
import LenguageModal from './LanguageModal';
import ProfileItem from './ProfileItem';
import ContactFormModal from './contactForm/ContactFormModal';

const ProfileElements = () => {
  const { i18n } = useTranslation()
  const { t } = useNavbarTranslations();
  const [openLanguageModal, setOpenLanguageModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);

  const getFlagUrl = (lang: string) => {
    switch (lang) {
      case 'en':
        return 'https://flagsapi.com/GB/flat/64.png';
      case 'de':
        return 'https://flagsapi.com/DE/flat/64.png';
      case 'es':
        return 'https://flagsapi.com/ES/flat/64.png';
      case 'fr':
        return 'https://flagsapi.com/FR/flat/64.png';
      default:
        return '';
    }
  };

  return (
    <Stack spacing={1} width={'100%'}>
        <Stack direction={'column'} spacing={0.3} alignItems={'center'}>
            <ProfileItem iconName="email" label={t('profile.contactMe')} borderStyle='all' handleClick={() => setOpenContactModal(true)}/>
        </Stack>
        <ProfileItem iconName="language" label={t('profile.language')} borderStyle='all' endDecorator={<img style={{marginRight: '10px'}} width={30} height={30} src={getFlagUrl(i18n.language.split("-")[0])} />} handleClick={() => {
            setOpenLanguageModal(true);
        }} />
        <LenguageModal openLanguageModal={openLanguageModal} onClose={() => setOpenLanguageModal(false)} />
        <ContactFormModal openContactModal={openContactModal} onClose={() => setOpenContactModal(false)} />
    </Stack>
  )
}

export default ProfileElements
