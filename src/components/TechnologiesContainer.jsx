import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from 'react-icons/di';
import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql
} from 'react-icons/si'

import '../styles/components/technologiesContainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript /> },
  { id: "react", name: "ReactJs", icon: <DiReact /> },
  { id: "sc", name: "Styled-components", icon: <SiStyledcomponents /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "postgresql", name: "Postgresql", icon: <SiPostgresql /> },
  { id: "node", name: "NodeJs", icon: <DiNodejsSmall /> },
  { id: "express", name: "ExpressJs", icon: <SiExpress /> }
]

export const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div className='tech-card' id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}