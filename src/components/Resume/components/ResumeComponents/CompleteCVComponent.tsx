import { Stack, Typography } from '@mui/material'
import EducationComponent from './EducationComponent'
import ExperienceComponent from './ExperienceComponent'
import ProjectsComponent from './ProjectsComponent'
import SkillsComponent from './SkillsComponent'
import { useCommonTranslations } from '../../../../i18n/useTranslations'

const CompleteCVComponent = () => {
const { t } = useCommonTranslations();
  return (
    <Stack>
      <Typography variant="h5" sx={{ mt: 1 }}>{t("Search.resultType.experiences")}</Typography>
      <ExperienceComponent />
      <Typography variant="h5" sx={{ mt: 1 }}>{t("Search.resultType.education")}</Typography>
      <EducationComponent />
      <Typography variant="h5" sx={{ mt: 1 }}>{t("Search.resultType.skills")}</Typography>
      <SkillsComponent />
      <Typography variant="h5" sx={{ mt: 1 }}>{t("Search.resultType.projects")}</Typography>
      <ProjectsComponent />
    </Stack>
  )
}

export default CompleteCVComponent
