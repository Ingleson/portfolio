import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import "./socialNetworks.sass";

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/jose-ingleson/'},
  { name: 'github', icon: <FaGithub />, link: 'https://github.com/ingleson'},
  { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/joseingleson/'},
]

export const SocialNetworks = () => {
  return (
    <section id="social">
      {socialNetworks.map((network) => (
        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}