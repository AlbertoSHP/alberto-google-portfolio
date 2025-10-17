import { Stack, Typography } from '@mui/material';
import { useCommonTranslations } from '../../../../i18n/useTranslations';
import { CVData } from '../../../../shared/data';
import type { SuggestionItem } from '../../../Search/GoogleSearchBar';
import SearchComponent from './components/SearchComponent';
import TipSearchComponent from '../../../../shared/components/TipSearchComponent';

interface SearchCVComponentProps {
    query: string | null;
}

interface SuggestionFilter {
    experiences: SuggestionItem[];
    education: SuggestionItem[];
    skills: SuggestionItem[];
    projects: SuggestionItem[];
}

const SearchCVComponent = ({ query }: SearchCVComponentProps) => {
    const { t } = useCommonTranslations();
    const filters: SuggestionFilter = {
        "experiences": query ? CVData.experiences.filter(exp => exp.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))).map(exp => ({ type: 'experiences', data: exp.company, label: exp.label, matches: exp.keywords.filter(keyword => keyword.toLowerCase().includes(query.toLowerCase())) })) ?? [] : [],
        "projects": query ? CVData.projects.filter(proj => proj.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))).map(proj => ({ type: 'projects', data: proj.name, label: proj.label, matches: proj.keywords.filter(keyword => keyword.toLowerCase().includes(query.toLowerCase())) })) ?? [] : [],
        "education": query ? CVData.education.filter(edu => edu.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))).map(edu => ({ type: 'education', data: edu.institution, label: edu.label, matches: edu.keywords.filter(keyword => keyword.toLowerCase().includes(query.toLowerCase())) })) ?? [] : [],
        "skills": query ? CVData.skills.filter(skill => skill.name.toLowerCase().includes(query.toLowerCase())).map(skill => ({ type: 'skills', data: skill.name, label: skill.label, matches: skill.keywords.filter(keyword => keyword.toLowerCase().includes(query.toLowerCase())) })) ?? [] : [],
    };

  return (
    <>
        {query ? (
            <>
                <Typography>
                    <strong>{t("search.resultsFor")}</strong> {query}
                </Typography>
                <Typography>
                    {t("search.resultsFound", { count: filters.experiences.length + filters.education.length + filters.skills.length + filters.projects.length }) }
                </Typography>
                <SearchComponent label="experiences" data={filters.experiences} />
                <SearchComponent label="education" data={filters.education} />
                <SearchComponent label="skills" data={filters.skills} />
                <SearchComponent label="projects" data={filters.projects} />
            </>
        ) : (
            <Stack direction={'column'} alignItems={'center'} padding={2} spacing={2}>
                <TipSearchComponent/>
            </Stack>
        )}
    </>
  )
}

export default SearchCVComponent
