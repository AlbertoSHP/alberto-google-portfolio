import { Box, Typography } from '@mui/material';
import { useAppNavigate } from '../../../../../hooks/useAppNavigate';
import { useCommonTranslations } from '../../../../../i18n/useTranslations';
import { CVData } from '../../../../../shared/data';
import type { TabType } from '../../../../../shared/interfaces';
import type { SuggestionItem } from '../../../../Search/GoogleSearchBar';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import ProjectItem from './ProjectItem';
import SkillItem from './SkillItem';

interface SearchComponentProps {
    label: TabType;
    data: SuggestionItem[];
}

const SearchComponent = ({ label, data }: SearchComponentProps) => {
    const { t } = useCommonTranslations();
    const { updateQueryParams } = useAppNavigate();
  return (
    <>
    <Typography variant="h5" sx={{ mt: 1 }}>{t("Search.resultType." + label)}</Typography>
    {
        data.length > 0 ? data.map((item, index) => (
            <Box onClick={() => updateQueryParams({ tab: label, id: item.label })} key={index} sx={{cursor: 'pointer'}}>
                {item.type === 'experiences' && <ExperienceItem exp={CVData.experiences.find(exp => exp.label === item.label)!} keyIndex={index} key={index} resultMatches={item.matches} />}
                {item.type === 'education' && <EducationItem edu={CVData.education.find(edu => edu.label === item.label)!} index={index} key={index} resultMatches={item.matches} />}
                {item.type === 'skills' && <SkillItem skill={CVData.skills.find(skill => skill.label === item.label)!} key={index} resultMatches={item.matches} />}
                {item.type === 'projects' && <ProjectItem project={CVData.projects.find(proj => proj.label === item.label)!} index={index} key={index} resultMatches={item.matches} />}
            </Box>
        )) : <Typography variant="body2" sx={{ mt: 1 }}>{t("search.noResults")}</Typography>
    }
    </>
  )
}

export default SearchComponent
