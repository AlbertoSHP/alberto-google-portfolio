import { Button, Stack } from '@mui/material'
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { useCommonTranslations } from '../../../i18n/useTranslations';
import { SearchItem, SuggestionItem } from '../GoogleSearchBar';

interface SearchButtonsProps {
    textAreaValue: string,
    search: SearchItem[]
}

const SearchButtons = ({ textAreaValue, search }: SearchButtonsProps) => {
  const { t } = useCommonTranslations();
  const { updateQueryParams } = useAppNavigate();
  
    const handleRandomNavigate = () => {
        const allItems: SuggestionItem[] = [];
        search.forEach(item => {
        allItems.push(...item.data);
        });
        if (allItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * allItems.length);
        const randomItem = allItems[randomIndex];
        updateQueryParams({ tab: randomItem.type.toLowerCase(), id: randomItem.label }, { path: '/cv', replace: true });
        } else {
        updateQueryParams({ search: textAreaValue, tab: 'search' }, { path: '/cv', replace: true });
        }
    };

  return (
    <Stack direction={'row'} spacing={2} justifyContent={'center'} marginTop={3} zIndex={1}>
        <Button
            variant='outlined'
            sx={{
            borderRadius: '5px',
            textDecoration: 'none',
            textTransform: 'none',
            color: '#202124',
            backgroundColor: '#e2e2e2',
            border: '1px solid #e2e2e2',
            "&:hover": { border: '1px solid #c2c2c2' }
            }}
            onClick={() => textAreaValue && updateQueryParams({ search: textAreaValue, tab: 'search' }, { path: '/cv', replace: true })}
        >
            {t("search.searchLabel")}
        </Button>
        <Button
            variant='outlined'
            sx={{
            borderRadius: '5px',
            textDecoration: 'none',
            textTransform: 'none',
            color: '#202124',
            backgroundColor: '#e2e2e2',
            border: '1px solid #e2e2e2',
            "&:hover": { border: '1px solid #c2c2c2' }
            }}
            onClick={() => textAreaValue && handleRandomNavigate()}
            >
            {t("search.feelingLucky")}
        </Button>
    </Stack>
  )
}

export default SearchButtons
