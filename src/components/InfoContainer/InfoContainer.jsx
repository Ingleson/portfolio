import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import './infoContainer.sass'

export const InfoContainer = () => {
  return (
    <section id='information'>
      <div className="info-card">
        <AiFillPhone id='phone'/>
        <div>
          <h3>Telefone</h3>
          <p>(92) 9 9413-6127</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email'/>
        <div>
          <h3>E-mail</h3>
          <p>1joseingleson1@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin'/>
        <div>
          <h3>Localização</h3>
          <p>Manaus / AM</p>
        </div>
      </div>
    </section>
  )
}