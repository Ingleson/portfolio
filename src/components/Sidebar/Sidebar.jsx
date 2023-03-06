import perfil from '../../img/port_pic.jpg';

import './sidebar.sass';
import { InfoContainer } from '../InfoContainer/InfoContainer.jsx';
import { SocialNetworks } from '../SocialNetwork/SocialNetworks.jsx';

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={perfil} alt="avatar"/>
      <p className="title">Desenvolvedor Full-Stack</p>
      <SocialNetworks />
      <InfoContainer />
      <a target='_blank' href="https://docs.google.com/document/d/1DD0M-GeoTuTdC_GOTwlfaOztcjS_c03jtHjmJdKH2EE/edit?usp=sharing" className='btn'>
        Currículo Download
      </a>
    </aside>
  )
}