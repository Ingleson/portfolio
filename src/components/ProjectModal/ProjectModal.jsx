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
            {projectList.sort(() => {return Math.random() - 0.5}).map((project) => (
              <li key={project.title}>
                <h2>{project.title}</h2>
                <img src={project.img} alt={project.title} />
                <p>{project.description}</p>
                <div>
                  <a href={project.linkGithub} target='_blank'>Code</a>
                  <a href={project.linkProject} target='_blank'>Project</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}