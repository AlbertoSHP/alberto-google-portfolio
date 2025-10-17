import { Box, Stack, TextField, Typography } from "@mui/material"
import { SearchItem, SuggestionItem } from "../GoogleSearchBar"
import { useCommonTranslations } from "../../../i18n/useTranslations"
import { useAppNavigate } from "../../../hooks/useAppNavigate"

interface MobileSuggestionListProps {
    search: SearchItem[]
    textAreaValue: string
    onClose: () => void
    setTextAreaValue: (value: string) => void
}

const MobileSuggestionList = ({ search, textAreaValue, onClose, setTextAreaValue }: MobileSuggestionListProps) => {
    const { t } = useCommonTranslations();
    const { updateQueryParams } = useAppNavigate();

  return (
    <Stack
        alignContent={'center'}
        overflow={'auto'}
        sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#fff',
            zIndex: 1000,
            paddingX: 1
        }}
    >
        <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <Box sx={{padding: '8px 8px 0 8px'}} onClick={() => onClose()}><span className="material-icons" style={{color: '#1a73e8'}}>arrow_back</span></Box>
            <TextField
                sx={{
                    padding: '8px 0',
                    width: '100%',
                    '& .MuiInput-root': {
                        '&::before, &::after': {
                            display: 'none',
                        },
                        '&:hover:not(.Mui-disabled):before': {
                            display: 'none',
                        },
                        },
                        '& .MuiInputBase-input': {
                            paddingBottom: 0,
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'inherit',
                        },
                }}
                onKeyDown={(event) => {
                if (event.key === 'Enter' && textAreaValue) {
                    event.preventDefault();
                    updateQueryParams({ search: textAreaValue, tab: 'search' }, { path: '/cv', replace: true });
                    onClose();
                }
                if (event.key === 'Escape') {
                    event.preventDefault();
                    (document.activeElement as HTMLElement).blur();
                }
                }}
                value={textAreaValue}
                onChange={(event) => setTextAreaValue && setTextAreaValue(event.target.value)}
                id="standard-basic"
                variant="standard"
                autoFocus
                size="medium"
            />
            <Box  sx={{padding: '8px 8px 0 8px'}}>
                {textAreaValue && <span className="material-icons" style={{cursor: 'pointer'}} onClick={() => {
                    onClose();
                    setTextAreaValue('');
                }}>close</span>}
            </Box>
        </Stack>
        
        {
            Array.from(search).map((suggestion: SearchItem, index) => (
            <Box
                key={index}
                component="span"
                sx={{
                fontSize: '14px',
                width: '100%',
                borderTop: '1px solid #d6d6d6',
                padding: '8px',
                }}
            >
                <Typography variant="body2" fontWeight={'bold'} color={'#202124'} marginBottom={1} textTransform={'capitalize'}>
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
    </Stack>
  )
}

export default MobileSuggestionList
