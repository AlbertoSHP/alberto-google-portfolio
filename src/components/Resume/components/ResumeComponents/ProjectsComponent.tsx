import { Stack } from '@mui/material'
import { CVData } from '../../../../shared/data'
import ProjectItem from './components/ProjectItem'

const ProjectsComponent = () => {
  return (
    <Stack 
      mt={1}
      spacing={1}>
      {
        CVData.projects.map((project, index) => (
          <ProjectItem project={project} index={index} key={index} />
        ))
      }
    </Stack>
  )
}

export default ProjectsComponent
