import '../styles/components/mainContent.sass'
import { AboutContainer } from './AboutContainer'
import { ProjectsContainer } from './ProjectsContainer'
import { TechnologiesContainer } from './TechnologiesContainer'

export const MainContent = () => {
  return (
    <main id='main-content'> 
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}