import { Stack } from '@mui/material';
import { CVData } from '../../../../shared/data';
import EducationItem from './components/EducationItem';

const EducationComponent = () => {
  return (
    <Stack>
      {
        CVData.education.map((edu, index) => (
            <EducationItem edu={edu} index={index} key={index} />
        ))
      }
    </Stack>
  )
}

export default EducationComponent
