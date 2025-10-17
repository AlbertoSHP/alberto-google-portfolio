import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/GoogleMainContainers/MainContent'
import GoogleResumeContainer from '../components/Resume/GoogleResumeContainer'

const GoogleAppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/cv" element={<GoogleResumeContainer />} />
      </Routes>
  )
}

export default GoogleAppRouter
