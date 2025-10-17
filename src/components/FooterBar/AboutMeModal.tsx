import { Box, Link, Modal, Stack, Typography } from "@mui/material";
import { useFooterTranslations } from "../../i18n/useTranslations";
import GitHubLogo from '/images/default/github.png';
import LinkedInLogo from '/images/default/linkedin.webp';

interface AboutMeModalProps {
    open: boolean;
    onClose: () => void;
}

const AboutMeModal = ({ open, onClose }: AboutMeModalProps) => {
  const { t } = useFooterTranslations();

  return (
    <Modal
        open={open}
        onClose={onClose}
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            bgcolor: '#e2edf7',
            borderRadius: '28px',
            boxShadow: 24,
            p: 3,
        }}>
            <Box sx={{ position: 'relative', width: '100%' }}>
                <Box position={'absolute'} top={-10} right={-10}>
                    <span className="material-icons" style={{ cursor: 'pointer', color: 'gray' }} onClick={onClose}>close</span>
                </Box>
            </Box>
        <Typography variant="h5" component="h2" fontWeight="bold">
            {t('about.welcome')}
        </Typography>
        <Typography
            variant="subtitle1"
            sx={{ mt: 1, fontWeight: 'bold' }}
            fontSize={{ xs: '0.8rem', sm: '1rem' }}>
            {t('about.description')}
        </Typography>
        <Typography
            variant="subtitle1"
            sx={{ mt: 1, fontWeight: 'bold' }}
            fontSize={{ xs: '0.7rem', sm: '1rem' }}>
            {t('about.goalOfWebsite')}
        </Typography>
        <Typography
            sx={{ mt: 1 }}
            fontSize={{ xs: '0.7rem', sm: '1rem' }}>
            {t('about.techStackTitle')}
        </Typography>
        <Typography fontSize={{ xs: '0.7rem', sm: '1rem' }}>
            <ul style={{ marginTop: 8, marginBottom: 0, paddingLeft: 20 }}>
                <li>TypeScript</li>
                <li>React</li>
                <li>Material UI</li>
                <li>Formik & Yup</li>
                <li>EmailJS</li>
                <li>Vite</li>
                <li>i18n (internationalization)</li>
                <li>ESLint & Prettier</li>
                <li>Git & GitHub</li>
            </ul>
        </Typography>
        <Stack>
            <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold' }}fontSize={{ xs: '0.7rem', sm: '1rem' }}>
                {t('about.checkoutTitle')}
            </Typography>
            <Stack direction={'row'} spacing={2} mt={1}>
                <Link href="https://github.com/AlbertoSHP" target="_blank" rel="noopener" sx={{ width: 50, height: 50, mr: 2, padding: 1, borderRadius: 7, '&:hover': { backgroundColor: '#fffdfd' } }}>
                    <img src={GitHubLogo} alt="Github" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Link>
                <Link href="https://www.linkedin.com/in/alberto-s%C3%A1nchez-heredero-p%C3%A9rez-43698337/" target="_blank" rel="noopener" sx={{ width: 50, height: 50, borderRadius: 7, '&:hover': { backgroundColor: '#fffdfd' } }}>
                    <img src={LinkedInLogo} alt="LinkedIn" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Link>
            </Stack>
        </Stack>
    </Box>
</Modal>
)
}

export default AboutMeModal
