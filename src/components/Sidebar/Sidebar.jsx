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
      <a href="https://drive.google.com/u/0/uc?id=17VUHzFNTGdgqwq2MC4ccZt5R76RBJd-D&export=download" className='btn'>
        Currículo Download
      </a>
    </aside>
  )
}