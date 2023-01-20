import './projectsContainer.sass'

export const ProjectsContainer = ({setModalProject, modalProject}) => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Abaixo está listado meus projetos onde tem acesso tanto ao projeto funcionando quanto ao código pelo github.</p>
      <a className="btn" onClick={() => setModalProject(!modalProject)}>
        Ver Projetos
      </a>
    </section>
  )
}