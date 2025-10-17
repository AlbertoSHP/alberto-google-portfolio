import { Typography } from '@mui/material'
import { useCommonTranslations } from '../../i18n/useTranslations'
import { CVData } from '../data'
import { RotatingText } from './RotatingText/RotatingText'

const TipSearchComponent = () => {
    const { t } = useCommonTranslations();
  return (
    <>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('search.advice')}
        </Typography>
        <RotatingText
            words={[...CVData.projects.flatMap(proj => proj.keywords),
                    ...CVData.skills.flatMap(skill => skill.keywords),
                    ...CVData.education.flatMap(edu => edu.keywords),
                    ...CVData.experiences.flatMap(exp => exp.keywords)
                  ]}
            interval={1900}
        />
    </>
  )
}

export default TipSearchComponent
