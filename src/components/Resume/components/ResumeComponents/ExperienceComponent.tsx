import { Stack } from '@mui/material';
import { useState } from 'react';
import { CVData } from '../../../../shared/data';
import type { Experience } from '../../../../shared/interfaces';
import ExperienceFloatingComponent from './components/ExperienceFloatingComponent';
import ExperienceItem from './components/ExperienceItem';

const ExperienceComponent = () => {
  const [checked, setChecked] = useState(false);
  const [expSelected, setExpSelected] = useState<Experience | null>(null)

  return (
      <Stack>
        {
          CVData.experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} keyIndex={index} setExpSelected={setExpSelected} setChecked={setChecked} />
          ))
        }
        {checked &&
          <ExperienceFloatingComponent expSelected={expSelected} setChecked={setChecked} />
        }
      </Stack>
  )
}

export default ExperienceComponent
