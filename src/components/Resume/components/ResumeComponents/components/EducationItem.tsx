import { Link, Stack, Typography } from '@mui/material'
import type { Education } from '../../../../../shared/interfaces'
import dayjs from 'dayjs'
import { useCommonTranslations } from '../../../../../i18n/useTranslations'

interface EducationItemProps {
    edu: Education
    index: number
    resultMatches?: string[]
}

const EducationItem = ({ edu, index, resultMatches }: EducationItemProps) => {
  const { t } = useCommonTranslations();
  
  return (
    <Stack id={edu.label} key={index} mt={1} sx={{
        padding: 2,
        '&:hover': { boxShadow: "0px 2px 8px 4px rgb(6 6 6 / 8%)" },
    }}>
        <Stack direction={'row'} spacing={2} alignItems="center">
            <img data-testid="education-image" alt={edu.institution} src={'/images'+edu.imageSrc} width={50} height={50} />
            <Stack>
                <Typography data-testid="education-title" variant="body1" fontWeight="bold">
                    {edu.title} - {edu.institution}
                </Typography>
                <Typography data-testid="education-dates" variant="body2" color="text.secondary">
                    { t("months."+dayjs(edu.startDate).format('MMMM'))+" "+dayjs(edu.startDate).format('YYYY')} - {edu.endDate ? t("months."+dayjs(edu.endDate)?.format('MMMM'))+" "+dayjs(edu.endDate)?.format('YYYY') : t("months.Current")}
                </Typography>
            </Stack>
        </Stack>
        <Stack alignItems={'flex-start'}>
            <Link data-testid="education-link" variant="body1" fontWeight="bold" href={edu.url} target="_blank" rel="noopener" sx={{ height: '20px' }}>
                {edu.url}
            </Link>
        </Stack>
        {resultMatches && <Typography>
            {t("search.matchedKeywords")}: <span style={{ fontWeight: 'bold' }}>{resultMatches.join(', ')}</span>
        </Typography>}
    </Stack>
  )
}

export default EducationItem
