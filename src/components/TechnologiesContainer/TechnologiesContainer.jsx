import { useState } from 'react';

import './technologiesContainer.sass';

export const TechnologiesContainer = ({setModalTech, modalTech, tech, setInfoTech}) => {

  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {tech.map((tech) => ( 
          <div className='tech-card' id={tech.id} key={tech.id} onClick={() =>{
            setInfoTech(tech)
            setModalTech(!modalTech)
          }}>
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