import './mainContent.sass'
import { AboutContainer } from '../AboutContainer/AboutContainer.jsx'
import { ProjectsContainer } from '../ProjectsContainer/ProjectsContainer.jsx'
import { TechnologiesContainer } from '../TechnologiesContainer/TechnologiesContainer.jsx'

export const MainContent = ({setModalTech, modalTech, tech, setInfoTech}) => {
  return (
    <main id='main-content'> 
      <AboutContainer />
      <TechnologiesContainer setModalTech={setModalTech} modalTech={modalTech} tech={tech} setInfoTech={setInfoTech}/>
      <ProjectsContainer />
    </main>
  )
}