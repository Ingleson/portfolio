import './techModal.sass'

export const TechModal = ({infoTech, setModalTech, modalTech}) => {

  return (
    <div className='modal-main'>
      <section>
        <div className='base-div'>
          <div className='header'>
            <h2>{infoTech.name} {infoTech.icon}</h2>
            <button onClick={() => setModalTech(!modalTech)}>x</button>
          </div>
          <h3>Descrição:</h3>
          <div className='div-description'>
            <p>{infoTech.description}</p>
          </div>
          <a href={infoTech.link} className="btn" target="_blank">Leia +</a>
        </div>
      </section>
    </div>
  )
}