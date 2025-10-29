import { Box, Divider, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import { useRef } from 'react'
import { CVData } from '../../../../../shared/data';
import { useCommonTranslations } from '../../../../../i18n/useTranslations';
import { useBreakpoint } from '../../../../../hooks/useBreakpoint';
import { useScroll } from '../../../../../hooks/useScroll';
import type { Experience } from '../../../../../shared/interfaces';
import dayjs from 'dayjs';

interface ExperienceFloatingComponentProps {
    expSelected: Experience | null;
    setChecked: (checked: boolean) => void;
}

const ExperienceFloatingComponent = ({ expSelected, setChecked }: ExperienceFloatingComponentProps) => {
  const { t } = useCommonTranslations();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useBreakpoint()
  const { isNavbarLimitReached } = useScroll()
  return (
    <Paper
        data-testid="experience-floating-component"
        elevation={2}
        sx={{ 
            width: isMobile ? '100%' : '370px',
            position: 'fixed',
            top: isMobile ? '0px' : (isNavbarLimitReached ? '98px' : '140px'),
            right: isMobile ? "0" : "3%",
            height: isMobile ? '100vh' : '85.3vh',
            borderRadius: '30px',
            padding: "10px",
            overflowY: 'auto'
        }} ref={containerRef}>
        <Stack sx={{
            position: 'relative'
        }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '10px',
                    right: 0,
                    width: '30px',
                }}> 
            <span className="material-icons" style={{ cursor: 'pointer', color: 'gray' }} onClick={() => setChecked(false)}>close</span>
            </Box>
            <Stack direction={'row'} spacing={2} alignItems="center" mb={2} mt={2}>
            <img data-testid="floating-experience-image" src={`/images/${expSelected?.imageSrc}`} alt={expSelected?.company} width={50} height={50} />
            <Box>
                <Typography data-testid="floating-experience-company" variant="h6" fontWeight="bold">
                    {expSelected?.company}
                </Typography>
                <Link data-testid="floating-experience-url" variant="body1" fontWeight="bold" href={expSelected?.url} target="_blank" rel="noopener" sx={{ height: '20px' }}>
                    {expSelected?.url}
                </Link>
            </Box>
            </Stack>
            <Typography data-testid="floating-experience-position" variant="body2" color="text.secondary">
                {expSelected?.position} - {expSelected?.company}
            </Typography>
            <Typography data-testid="floating-experience-dates" variant="body2" color="text.secondary" mb={2}>
                {expSelected && `${dayjs(expSelected.startDate).format('MMMM YYYY')} - ${expSelected.endDate ? dayjs(expSelected.endDate)?.format('MMMM YYYY') : 'Current'}`}
            </Typography>
            <Typography data-testid="floating-experience-description" variant="body2" mb={2}>
                {expSelected?.description}
            </Typography>
            <Divider />
            <Typography variant="body1" fontWeight="bold" mt={2} mb={1}>
                {t("Search.resultType.skills")}:
            </Typography>
            <Grid container spacing={1} mt={1} mb={1}>
            {expSelected?.skillIds.map((skillId) => {
                const skill = CVData.skills.find(s => s.id === skillId);
                return skill ? (
                <Grid key={skill.id}>
                    <Box sx={{
                    backgroundColor: '#e8f0fe',
                    color: '#1967d2',
                    borderRadius: '16px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} spacing={0.5} sx={{textTransform: 'capitalize'}}>
                        <img src={`/images/${skill.imageSrc}`} alt={skill.name} width={25} height={25} style={{ marginRight: '4px' }} />
                        {skill.name}
                    </Stack>
                    </Box>
                </Grid>
                ) : null;
            })}
            </Grid>
            <Divider />
            <Typography variant="body1" fontWeight="bold" mt={2} mb={1}>
                {t("Search.resultType.projects")}:
            </Typography>
            <Stack spacing={2} mb={2}>
            {expSelected?.projectsIds.map((id) => CVData.projects.find(project => project.id === id)).map((project, index) => (
                <Box key={index} sx={{ paddingLeft: 1 }}>
                <Link variant="body1" fontWeight="bold" href={project?.url} target="_blank" rel="noopener" sx={{ height: '20px' }}>
                    {project?.name}
                </Link>
                <Typography variant="body2">
                    {project?.description}
                </Typography>
                </Box>
            ))}
            </Stack>
        </Stack>
    </Paper>
  )
}

export default ExperienceFloatingComponent
