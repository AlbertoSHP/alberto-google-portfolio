import { Textarea } from '@mui/joy';
import { Box } from '@mui/material';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { CVData } from '../../shared/data';
import type { TabType } from '../../shared/interfaces';
import DesktopSuggestionList from './components/DesktopSuggestionList';
import MobileSuggestionList from './components/MobileSuggestionList';
import SearchButtons from './components/SearchButtons';

export interface SuggestionItem {
  type: TabType;
  data: string;
  label: string;
  matches?: string[];
}

export interface SearchItem {
  type: string;
  data: SuggestionItem[];
}

const GoogleSearchBar = () => {
  const { isMobile, isTablet, isLargeMobile } = useBreakpoint();
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false);
  const { updateQueryParams, getParamValue, isCVPage, isMainPage, setParamValue } = useAppNavigate();

  const search: SearchItem[] = useMemo(() => {
    const text = textAreaValue.trim().toLowerCase()
    const skills = CVData.skills.filter(skill => skill.name.toLowerCase().includes(text)).map(skill => ({ type: 'skills' as TabType, data: skill.name, label: skill.label, matches: skill.keywords.filter(keyword => keyword.toLowerCase().includes(text)).slice(0, 4) })) ?? [];
    const experiences = CVData.experiences.filter(exp => exp.keywords.some(keyword => keyword.toLowerCase().includes(text))).map(exp => ({ type: 'experiences' as TabType, data: exp.company, label: exp.label, matches: exp.keywords.filter(keyword => keyword.toLowerCase().includes(text)).slice(0, 4) })) ?? [];
    const projects = CVData.projects.filter(proj => proj.keywords.some(keyword => keyword.toLowerCase().includes(text))).map(proj => ({ type: 'projects' as TabType, data: proj.name, label: proj.label, matches: proj.keywords.filter(keyword => keyword.toLowerCase().includes(text)).slice(0, 4)})) ?? [];
    const education = CVData.education.filter(edu => edu.keywords.some(keyword => keyword.toLowerCase().includes(text))).map(edu => ({ type: 'education' as TabType, data: edu.institution, label: edu.label, matches: edu.keywords.filter(keyword => keyword.toLowerCase().includes(text)).slice(0, 4)})) ?? [];
    return [{ type: 'skills' as TabType, data: skills }, { type: 'experiences' as TabType, data: experiences }, { type: 'projects' as TabType, data: projects }, { type: 'education' as TabType, data: education }];
  }, [textAreaValue]);

 useEffect(() => {
    const searchParam = getParamValue('search');
    if (searchParam && isCVPage) {
      setTextAreaValue(searchParam);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(getParamValue('tab') === 'search' && textAreaValue) {
      setParamValue('search', textAreaValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getParamValue('tab')])

  useEffect(() => {
    if (!isSuggestionListOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!isMobile){
        if (!target.closest('.google-search-bar') || !target.closest('#suggestion-list')) {
          setIsSuggestionListOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSuggestionListOpen, isMobile]);
  
  const getParentWidth = useMemo(() => {
    if (isCVPage) {
      return isMobile || isTablet ? '100%' : '630px';
    }
    return isMobile ? '100%' : '630px';
  }, [isCVPage, isMobile, isTablet]);
  
  return (
    <Box
      className='google-search-bar'
      sx={{
        position: 'relative',
          padding: "16px 0",
          width: getParentWidth,
      }}
    >
      <Textarea
        id='portfolio-search-bar'
        size='md'
        value={textAreaValue}
        onChange={(event) => setTextAreaValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && textAreaValue) {
            event.preventDefault();
            updateQueryParams({ search: textAreaValue, tab: 'search' }, { path: '/cv', replace: true });
            setIsSuggestionListOpen(false);
          }
          if (event.key === 'Escape') {
            event.preventDefault();
            (document.activeElement as HTMLElement).blur();
          }
        }}
        onFocus={() => setIsSuggestionListOpen(true)}
        sx={{
          fontSize: isMobile ? '12px' : '14px',
          height: '50px',
          width: '100%',
          background: "#fff",
          boxShadow: "0px 0px 8px 1px rgba(31, 31, 31, 0.08)",
          borderRadius: isSuggestionListOpen ? "26px 26px 0 0" : "26px",
          '&::before': {
            display: 'none',
          },
          "&.MuiTextarea-root": {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'transparent',
            '&:hover': {
              boxShadow: isSuggestionListOpen ? "0px 0px 8px 1px rgba(31, 31, 31, 0.08)" : "0px 0px 15px 7px rgba(31, 31, 31, 0.08)",
            },
            "& .MuiTextarea-textarea": {
              paddingTop: isMobile ? '11px' : '8px',
              width: '90%',
            },
            "& .MuiTextarea-startDecorator": {
              margin: 0,
              padding: isMobile || isTablet ? '3px' : '8px',
            },
            "& .MuiTextarea-endDecorator": {
              flexGrow: 1,
              margin: '2px 12px 0 0',
            }
          }
        }}
        startDecorator={
          isCVPage && (isTablet || isLargeMobile) ? 
          <Box onClick={() => updateQueryParams({tab: null, search: null, id: null},{ path: '/', replace: true })}>
            <img style={{objectFit: 'fill'}} width={30} height={30} src='src/assets/Portfolio_logo-small.png' />
          </Box>
          : <span className="material-icons">search</span>}
        endDecorator={ textAreaValue && <span className="material-icons" style={{cursor: 'pointer'}} onClick={() => {
          setTextAreaValue('')
          setIsSuggestionListOpen(false);
          updateQueryParams({ search: null, id: null }, { path: isCVPage ? '/cv' : '/', replace: true });
        }}>close</span>}
      />
      {
        isSuggestionListOpen && (
          isMobile ?
            <MobileSuggestionList search={search} textAreaValue={textAreaValue} setTextAreaValue={setTextAreaValue} onClose={() => setIsSuggestionListOpen(false)} />
          : 
            <DesktopSuggestionList search={search} textAreaValue={textAreaValue} setTextAreaValue={setTextAreaValue}  onClose={() => setIsSuggestionListOpen(false)}/>
        )
      }
      {isMainPage && !isMobile && <SearchButtons textAreaValue={textAreaValue} search={search} />}
    </Box>
  )
}

export default GoogleSearchBar
