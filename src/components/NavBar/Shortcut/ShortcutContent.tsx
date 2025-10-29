import { Box, Grid } from '@mui/material'
import ShortCutItem from './ShortCutItem'
import { useNavbarTranslations } from '../../../i18n/useTranslations';
import { useAppNavigate } from '../../../hooks/useAppNavigate';

interface ShortcutContentProps {
  closePopover: () => void;
}

const ShortcutContent = ({ closePopover }: ShortcutContentProps) => {
  const { t } = useNavbarTranslations();
  const { updateQueryParams } = useAppNavigate();

  return (
    <Box
      data-testid="shortcut-content-box"
      sx={{
        width: "330px",
        borderRadius: "28px", 
        backgroundColor: "#f8fafd",
    }}>
      <Grid container spacing={2} sx={{padding: "16px"}}>
        <Grid size={6} data-testid="shortcut-all">
            <ShortCutItem iconName="description" label={t('shortcuts.cv')} onClick={() => {
              updateQueryParams({ tab: 'all' },{ path: '/cv', replace: true });
              closePopover();
            }} />
        </Grid>
        <Grid size={6} data-testid="shortcut-experiences">
            <ShortCutItem iconName="account_circle" label={t('shortcuts.experiences')} onClick={() => {
              updateQueryParams({ tab: 'experiences' },{ path: '/cv', replace: true });
              closePopover();
            }} />
        </Grid>
        <Grid size={6} data-testid="shortcut-education">
            <ShortCutItem iconName="school" label={t('shortcuts.education')} onClick={() => {
              updateQueryParams({ tab: 'education' },{ path: '/cv', replace: true });
              closePopover();
            }} />
        </Grid>
        <Grid size={6} data-testid="shortcut-skills">
            <ShortCutItem iconName="code" label={t('shortcuts.skills')} onClick={() => {
              updateQueryParams({ tab: 'skills' },{ path: '/cv', replace: true });
              closePopover();
            }} />
        </Grid>
        <Grid size={6} data-testid="shortcut-projects">
            <ShortCutItem iconName="work" label={t('shortcuts.projects')} onClick={() => {
              updateQueryParams({ tab: 'projects' },{ path: '/cv', replace: true });
              closePopover();
            }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShortcutContent
