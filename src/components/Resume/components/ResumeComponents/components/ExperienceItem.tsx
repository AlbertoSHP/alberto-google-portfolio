import { Link, Stack, Typography } from '@mui/material';
import type { Experience } from '../../../../../shared/interfaces';
import { useCommonTranslations } from '../../../../../i18n/useTranslations';
import dayjs from 'dayjs';
import { CVData } from '../../../../../shared/data';

interface ExperienceItemProps {
    exp: Experience
    keyIndex: number
    setExpSelected?: (exp: Experience | null) => void
    setChecked?: (checked: boolean) => void
    resultMatches?: string[]
}

const ExperienceItem = ({ exp, keyIndex, setExpSelected, setChecked, resultMatches }: ExperienceItemProps) => {
  const { t } = useCommonTranslations();

  return (
    <Stack
        id={exp.label}
        key={keyIndex}
        mt={1}
        sx={{
            cursor: 'pointer',
            padding: 2,
            '&:hover': { boxShadow: "0px 2px 8px 4px rgb(6 6 6 / 8%)" },
        }}
        onClick={() => {
            setExpSelected?.(CVData.experiences[keyIndex]);
            setChecked?.(true);
        }}
    >
        <Stack direction={'row'} spacing={2} alignItems="center">
            <img alt={exp.company} src={'/images'+exp.imageSrc} width={50} height={50} />
            <Stack>
                <Typography variant="body1" fontWeight="bold">
                    {exp.position} - {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    { t("months."+dayjs(exp.startDate).format('MMMM'))+" "+dayjs(exp.startDate).format('YYYY')} - {exp.endDate ? t("months."+dayjs(exp.endDate)?.format('MMMM'))+" "+dayjs(exp.endDate)?.format('YYYY') : t("months.Current")}
                </Typography>
            </Stack>
        </Stack>
        <Stack alignItems={'flex-start'}>
            <Link variant="body1" fontWeight="bold" href={exp.url} target="_blank" rel="noopener" sx={{ height: '20px' }}>
                {exp.url}
            </Link>
            <Typography variant="body2" paddingTop={1}>
                {exp.description}
            </Typography>
        </Stack>
        {resultMatches && <Typography sx={{ marginTop: 1 }}>
            {t("search.matchedKeywords")}: <span style={{ fontWeight: 'bold' }}>{resultMatches.join(', ')}</span>
        </Typography>}
    </Stack>
  )
}

export default ExperienceItem
