import './mainContent.sass'
import { AboutContainer } from '../AboutContainer/AboutContainer.jsx'
import { ProjectsContainer } from '../ProjectsContainer/ProjectsContainer.jsx'
import { TechnologiesContainer } from '../TechnologiesContainer/TechnologiesContainer.jsx'

export const MainContent = () => {
  return (
    <main id='main-content'> 
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}