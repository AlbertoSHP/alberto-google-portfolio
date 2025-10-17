import { Box, Stack, Typography } from '@mui/material'
import type { Project } from '../../../../../shared/interfaces'
import { useCommonTranslations } from '../../../../../i18n/useTranslations'

interface ProjectItemProps {
    project: Project
    index: number
    resultMatches?: string[]
}

const ProjectItem = ({ project, index, resultMatches }: ProjectItemProps) => {
    const { t } = useCommonTranslations();
    
  return (
    <Box id={project.label} key={index} sx={{ padding: 2, '&:hover': { boxShadow: "0px 2px 8px 4px rgb(6 6 6 / 8%)" } }}>
        <Stack key={index} spacing={1}>
            <img src={'/images/'+project.imageSrc} alt={project.name} width={90} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
        </Stack>
        {resultMatches && <Typography sx={{ marginTop: 1 }}>
            {t("search.matchedKeywords")}: <span style={{ fontWeight: 'bold' }}>{resultMatches.join(', ')}</span>
        </Typography>}
    </Box>
  )
}

export default ProjectItem
