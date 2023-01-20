import './projectsContainer.sass'

export const ProjectsContainer = ({setModalProject, modalProject}) => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Abaixo está o link para o meu github pessoal com meus projetos onde demonstro minhas habilidades com as ferramentas que possuo.</p>
      <button className="btn" onClick={() => setModalProject(!modalProject)}>
        Ver Projetos
      </button>
    </section>
  )
}