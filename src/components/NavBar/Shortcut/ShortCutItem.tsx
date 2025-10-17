import type { ShortCutItemProps } from './ShortCutItemInterfaces'
import { Box, Stack } from '@mui/material'

const ShortCutItem = ({ iconName, label, onClick }: ShortCutItemProps) => {
  return (
    <Stack direction={'column'} spacing={1} alignItems={'center'} justifyContent={'center'} height={'60px'}
        sx={{
            cursor: 'pointer',
            "&:hover": { backgroundColor: '#e1ecfc'},
            borderRadius: '12px'
        }}
        onClick={onClick}
    >
        <span className="material-icons">{iconName}</span>
        <Box>{label}</Box>
    </Stack>
  )
}

export default ShortCutItem
