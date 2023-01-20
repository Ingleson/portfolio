import projectList from '../../data/projects'

import './projectModal.sass'

export const ProjectModal = ({modalProject, setModalProject}) => {

  return (
    <div className='modal-main-project'>
      <section>
        <div className="base-div-project">
          <header>
            <h2>Projetos</h2>
            <button onClick={() => setModalProject(!modalProject)}>X</button>
          </header>
          <ul>
            {projectList.map((project) => (
              <a key={project.title} href={project.link} target='_blank'>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.title} />
                <p>{project.description}</p>
              </a>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}