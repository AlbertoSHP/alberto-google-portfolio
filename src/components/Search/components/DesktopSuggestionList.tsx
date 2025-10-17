import { Box, Stack, Typography } from '@mui/material';
import { SearchItem, SuggestionItem } from '../GoogleSearchBar';
import SearchButtons from './SearchButtons';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { useCommonTranslations } from '../../../i18n/useTranslations';

interface DesktopSuggestionListProps {
    search: SearchItem[],
    textAreaValue: string,
    setTextAreaValue: (value: string) => void,
    onClose: () => void,
}

const DesktopSuggestionList = ({ search, textAreaValue, setTextAreaValue, onClose }: DesktopSuggestionListProps) => {
  const { isCVPage } = useAppNavigate();
    const { t } = useCommonTranslations();
    const { updateQueryParams } = useAppNavigate();

  return (
    <Stack
            id='suggestion-list'
            gap={0.5}
            zIndex={2}
            sx={{
              overflowY: 'auto',
              overflowX: 'hidden',
              position: 'absolute',
              height: '300px',
              top: '65px',
              left: 0,
              right: 0,
              backgroundColor: '#fff',
              borderRadius: '0 0 24px 24px',
              boxShadow: "0px 4px 8px 1px rgba(31, 31, 31, 0.08)",
              paddingBottom: '10px',
            }}
          >
            <Box sx={{ borderTop: '1px solid #e8eaed', margin: '0 20px 0 14px', paddingBottom: '4px' }}></Box>
            {
              Array.from(search).map((suggestion: SearchItem, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    fontSize: '14px',
                    width: '100%',
                    borderBottom: '1px solid #d6d6d6',
                    padding: '8px 16px',
                  }}
                >
                  <Typography textTransform={'capitalize'} variant="body2" fontWeight={'bold'} color={'#202124'} marginBottom={1}>
                    {suggestion.type}
                  </Typography>
                  {
                    suggestion.data && suggestion.data.length > 0 ? suggestion.data.map((item: SuggestionItem) => 
                      (
                      <Stack
                        direction={'row'}
                        key={item.label}
                        paddingLeft={2}
                        spacing={1}
                        width={'100%'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                      >
                        <Stack direction={'row'} spacing={1} alignItems={'center'}>
                            {!textAreaValue && <span style={{ color: '#c3c8fa' }} className="material-icons">trending_up</span>}
                            <Typography onClick={() => {
                              updateQueryParams({tab: suggestion.type.toLowerCase(), id: item.label},{ path: '/cv', replace: true })
                              onClose();
                              setTextAreaValue(item.data);
                            }} sx={{ cursor: 'pointer', "&:hover": { textDecoration: 'underline' }}} fontSize={{ xs: '0.8rem', sm: '0.9rem', md: '1rem' }} fontWeight={500} color={'#404bbe'}>
                                {item.data}
                            </Typography>
                        </Stack>
                        {textAreaValue && item.matches && item.matches.length > 0 && (
                          <Stack spacing={1} alignItems={'center'} direction={'row'} sx={{margin: '4px 0 0 0' }}>
                            {item.matches.map((m: string) => {
                              const startIndex = m.toLowerCase().indexOf(textAreaValue.trim().toLowerCase());
                              if (startIndex === -1) return m;
                              const endIndex = startIndex + textAreaValue.trim().length;
                              return (
                                <Typography fontSize={{ xs: '0.65rem', md: '0.8rem' }} key={m}>
                                  {m.substring(0, startIndex)}
                                  <span style={{ fontWeight: 'bold' }}>{m.substring(startIndex, endIndex)}</span>
                                  {m.substring(endIndex)}
                                </Typography>
                              );
                            })}
                          </Stack>
                        )}
                      </Stack>
                    )) : <Typography fontSize={{ xs: '0.8rem', sm: '0.9rem', md: '1rem' }} sx={{ marginLeft: '16px', color: '#5f6368' }}>{t("search.noResults")}</Typography>
                  }
                </Box>
                )
              )
            }
            {!isCVPage && <SearchButtons textAreaValue={textAreaValue} search={search} />}
        </Stack>
  )
}

export default DesktopSuggestionList
