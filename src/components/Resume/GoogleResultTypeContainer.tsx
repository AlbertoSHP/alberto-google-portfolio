import { Box, Stack } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CompleteCVComponent from './components/ResumeComponents/CompleteCVComponent';
import EducationComponent from './components/ResumeComponents/EducationComponent';
import ExperienceComponent from './components/ResumeComponents/ExperienceComponent';
import ProjectsComponent from './components/ResumeComponents/ProjectsComponent';
import SkillsComponent from './components/ResumeComponents/SkillsComponent';
import './GoogleResultTypeContainer.scss';
import { useEffect } from 'react';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import type { TabType } from '../../shared/interfaces';
import ResultResumeItem from './components/ResultType/ResultResumeItem';
import SearchCVComponent from './components/ResumeComponents/SearchCVComponent';
import { useAppNavigate } from '../../hooks/useAppNavigate';

const GoogleResultTypeContainer = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const tab = searchParams.get('tab') as TabType;
  const { isMobile, isTablet } = useBreakpoint();
  const { updateQueryParams } = useAppNavigate();

  const id = searchParams.get("id");

  useEffect(() => {
    if (!tab) {
      updateQueryParams({ tab: 'all' }, { path: '/cv', replace: true });
    }
  },[tab, updateQueryParams]);

  useEffect(() => {
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        el.classList.add("idElement");
        el.classList.add("fade-in-selected");
        setTimeout(() => {
          el.classList.add("fade-out-selected");
        }, 2000);
      }
    }
  }, [id]);
    
  return (
    <Stack
      flex={1}
      sx={{
        position: 'relative',
        padding: isMobile || isTablet ? '0' : '0 0 0 240px',
      }}
      className='google-result-type-container'
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent={'flex-start'}
        paddingX={1}
        sx={{
          overflowX: 'auto',
        }}
      >
          <ResultResumeItem label="search" />
          <ResultResumeItem label="all" />
          <ResultResumeItem label="experiences" />
          <ResultResumeItem label="education" />
          <ResultResumeItem label="skills" />
          <ResultResumeItem label="projects" />
      </Stack>
      <Box sx={{borderBottom: '1px solid #dadce0', position: 'absolute', left: 0, top: '41px', width: '100%'}} />
      <Stack
        flex={1}
        sx={{
        padding: 1,
        width: isMobile || isTablet ? '100%' : '630px',
        height: '100%',
        ...(tab === 'search' && !search && { alignItems: 'center', justifyContent: 'center' })
      }}>
        { tab === 'search' && <SearchCVComponent query={search} />}
        { tab === 'all' && <CompleteCVComponent /> }
        { tab === 'experiences' && <ExperienceComponent /> }
        { tab === 'education' && <EducationComponent /> }
        { tab === 'skills' && <SkillsComponent /> }
        { tab === 'projects' && <ProjectsComponent /> }
      </Stack>
    </Stack>
  )
}

export default GoogleResultTypeContainer
