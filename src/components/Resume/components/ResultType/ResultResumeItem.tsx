import { Stack, Typography } from '@mui/material';
import { useAppNavigate } from '../../../../hooks/useAppNavigate';
import { useCommonTranslations } from '../../../../i18n/useTranslations';
import type { TabType } from '../../../../shared/interfaces';

interface ResultResumeItemProps {
    label: TabType;
}

const ResultResumeItem = ({ label }: ResultResumeItemProps) => {
const { getParamValue, updateQueryParams } = useAppNavigate();
const { t } = useCommonTranslations();

  return (
    <Stack
        justifyContent={'center'}
        sx={{
            margin: '0 10px',
            cursor: getParamValue('tab') !== label ? 'pointer' : 'default',
            borderBottom: getParamValue('tab') === label ? '3px solid #000000' : 'none',
            height: '41px'
        }}
        onClick={() => updateQueryParams({ tab: label })}
        >
        <Typography
          variant="body1"
          fontSize={{ xs: '0.9rem', sm: '1rem' }}
          sx={{ fontWeight: getParamValue('tab') === label ? 'bold' : 'normal' }}>
            {t("Search.resultType."+label)}
        </Typography>
    </Stack>
  )
}

export default ResultResumeItem
