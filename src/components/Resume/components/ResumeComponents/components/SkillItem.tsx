import { Box, Grid, Stack, Typography } from '@mui/material'
import { levels, type Skill } from '../../../../../shared/interfaces'
import { useCommonTranslations } from '../../../../../i18n/useTranslations'

interface SkillItemProps {
    skill: Skill
    resultMatches?: string[]
}

const SkillItem = ({ skill, resultMatches }: SkillItemProps) => {
    const { t } = useCommonTranslations();
    
  return (
    <Stack direction="column" sx={{
        width: '100%',
        padding: 1,
        '&:hover': { boxShadow: "0px 2px 8px 4px rgb(6 6 6 / 8%)" }
    }}>
        <Stack direction={'row'} spacing={1} alignItems="center">
            <Box sx={{ width: '30%' }}>
                <img data-testid="skill-image" src={'/images'+skill.imageSrc} alt={skill.name} width={'100%'} />
            </Box>
            <Grid spacing={1} sx={{ width: '70%' }}>
                <Typography data-testid="skill-name" variant="body1" fontWeight="bold">
                    {skill.name}
                </Typography>
                <Typography data-testid="skill-type" variant="body2" color="text.secondary">
                    {skill.type}
                </Typography>
                <Stack direction="row" alignItems="center" width={'100%'} marginTop={1} spacing={0.5}>
                    {[...Array(levels.get(skill.level))].map((_, i) => <Box data-testid={`level-${i}`} key={i} sx={{ bgcolor: 'green', width: '20%', height: '2px' }} />)}
                </Stack>
            </Grid>
        </Stack>
        {resultMatches && 
        <Typography sx={{ paddingTop: 1 }}>
            {t("search.matchedKeywords")}: <span style={{ fontWeight: 'bold' }}>{resultMatches.join(', ')}</span>
        </Typography>}
    </Stack>
  )
}

export default SkillItem
