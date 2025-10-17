import { Button, Chip, FormControl, Grid, InputLabel, Menu, MenuItem, Select, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { CVData } from '../../../../shared/data'
import { levels, type SkillLevel, type SkillType } from '../../../../shared/interfaces'
import { useCommonTranslations } from '../../../../i18n/useTranslations'
import SkillItem from './components/SkillItem'
import { useBreakpoint } from '../../../../hooks/useBreakpoint'

const SkillsComponent = () => {
  const { t } = useCommonTranslations();
  const [level, setLevel] = useState('')
  const [type, setType] = useState('')
  const [sortOrder, setSortOrder] = useState<'levelAsc' | 'levelDesc' | 'typeAsc' | 'typeDesc' | ''>('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { isMobile } = useBreakpoint();

  const orderLabels = new Map([
    ['levelAsc', t("skills.levelAsc")],
    ['levelDesc', t("skills.levelDesc")],
    ['typeAsc', t("skills.typeAsc")],
    ['typeDesc', t("skills.typeDesc")],
  ]);

  const levelLabels = new Map([
    ['beginner', t("skills.beginner")],
    ['intermediate', t("skills.intermediate")],
    ['advanced', t("skills.advanced")],
    ['expert', t("skills.expert")],
  ]);

  return (
    <Stack 
      mt={1} sx={{
      padding: '0 8px',
    }}>
      <Stack direction={isMobile ? 'column' : 'row'} justifyContent={'space-between'} alignItems={isMobile ? 'flex-start' : 'center'}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Typography variant="body1" fontWeight="bold">
            {t("filters.filterBy")}
          </Typography>
          <FormControl sx={{ m: 2, minWidth: 120 }} size='small'>
            <InputLabel id="select-level">{t("skills.levelTitle")}</InputLabel>
            <Select
              variant='outlined'
              labelId="select-level"
              id="select-level"
              value={level}
              label="Level"
              size='small'
              sx={{ fontSize: '0.9rem' }}
              onChange={(e) => setLevel(e.target.value as SkillLevel)}
            >
              <MenuItem value={'beginner'}>{t("skills.beginner")}</MenuItem>
              <MenuItem value={'intermediate'}>{t("skills.intermediate")}</MenuItem>
              <MenuItem value={'advanced'}>{t("skills.advanced")}</MenuItem>
              <MenuItem value={'expert'}>{t("skills.expert")}</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 2, minWidth: 120 }} size='small'>
            <InputLabel id="select-type">{t("skills.typeTitle")}</InputLabel>
            <Select
              variant='outlined'
              labelId="select-type"
              id="select-type"
              value={type}
              label="Type"
              size='small'
              sx={{ fontSize: '0.9rem' }}
              onChange={(e) => setType(e.target.value as SkillType)}
            >
              <MenuItem value={'frontend'}>Frontend</MenuItem>
              <MenuItem value={'backend'}>Backend</MenuItem>
              <MenuItem value={'fullstack'}>Fullstack</MenuItem>
              <MenuItem value={'devops'}>DevOps</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1} mt={1}>
          <Typography variant="body1" fontWeight="bold">
            {t("filters.sortBy")}
          </Typography>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(event) => setAnchorEl(event.currentTarget)}
          ><span className='material-icons'>sort</span></Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={() => { setSortOrder('levelAsc'); handleClose(); }}>{t("skills.levelAsc")}</MenuItem>
            <MenuItem onClick={() => { setSortOrder('levelDesc'); handleClose(); }}>{t("skills.levelDesc")}</MenuItem>
            <MenuItem onClick={() => { setSortOrder('typeAsc'); handleClose(); }}>{t("skills.typeAsc")}</MenuItem>
            <MenuItem onClick={() => { setSortOrder('typeDesc'); handleClose(); }}>{t("skills.typeDesc")}</MenuItem>
          </Menu>
        </Stack>
      </Stack>
      <Stack direction={'row'} alignItems={'flex-start'} mt={1} spacing={1} sx={{ width: '100%', marginBottom: 1 }}>
        {type && <Chip sx={{ textTransform: 'capitalize' }} label={type} onDelete={() => setType('')} />}
        {level && <Chip label={levelLabels.get(level)} onDelete={() => setLevel('')} />}
        {sortOrder && <Chip label={orderLabels.get(sortOrder)} onDelete={() => setSortOrder('')} />}
      </Stack>
      <Grid container spacing={2}>
        {
          CVData.skills
          .filter(skill => (skill.level === level || level === '') && (skill.type === type || type === ''))
          .sort((a, b) => {
            if (sortOrder === 'levelDesc') {
              return (levels?.get(a?.level) ?? 0) - (levels?.get(b?.level) ?? 0);
            } else if (sortOrder === 'levelAsc') {
              return (levels?.get(b?.level) ?? 0) - (levels?.get(a?.level) ?? 0);
            } else {
              return 0;
            }
          })
          .sort((a, b) => {
            const types = new Map([
              ['frontend', 1],
              ['backend', 2],
              ['fullstack', 3],
              ['devops', 4],
            ]);
            if (sortOrder === 'typeAsc') {
              return (types?.get(a?.type) ?? 0) - (types?.get(b?.type) ?? 0);
            } else if (sortOrder === 'typeDesc') {
              return (types?.get(b?.type) ?? 0) - (types?.get(a?.type) ?? 0);
            } else {
              return 0;
            }
          })
          .map((skill, index) => (
              <Grid container key={index} size={{ xs: 6, sm: 4, md: 3 }} justifyContent="center" alignItems="center" id={skill.label}>
                <SkillItem skill={skill} />
              </Grid>
            ))
        }
      </Grid>
    </Stack>
  )
}

export default SkillsComponent
