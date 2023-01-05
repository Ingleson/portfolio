import { useState } from 'react';

import { MainContent } from './components/MainContent/MainContent';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TechModal } from './components/TechModal/TechModal';

import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiNodejsSmall,
} from 'react-icons/di';
import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql
} from 'react-icons/si'

import './styles/app.sass';

function App() {

  const technologies = [
    { id: "html", 
      name: "HTML5", 
      description: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
      icon: <DiHtml5 /> 
    },
    { id: "css", 
      name: "CSS3", 
      description: "CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
      icon: <DiCss3 />,
    },
    { id: "js", 
      name: "JavaScript", 
      description: "JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). Saiba mais sobre o JavaScript.",
      link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      icon: <DiJsBadge />,
    },
    { id: "ts", 
      name: "TypeScript", 
      description: "In the last article we learned about Svelte stores and even implemented our own custom store to persist the app's information to Web Storage. We also had a look at using the transition directive to implement animations on DOM elements in Svelte.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript",
      icon: <SiTypescript />,
    },
    { id: "react", 
      name: "ReactJs", 
      description: "In this article we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app — learning a bit about how React works in the process.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
      icon: <DiReact />,
    },
    { id: "sc", 
      name: "Styled-components", 
      description: "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!",
      link: "https://styled-components.com/docs",
      icon: <SiStyledcomponents />,
    },
    { id: "sass", 
      name: "SASS", 
      description: "Sass (em inglês, syntactically awesome stylesheets, ou folhas de estilo sintaticamente incríveis) é uma linguagem de folhas de estilo  concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.",
      link: "https://pt.wikipedia.org/wiki/Sass_(linguagem_de_folhas_de_estilos)",
      icon: <DiSass />,
    },
    { id: "postgresql", 
      name: "PostgreSQL", 
      description: "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
      link: "https://www.postgresql.org/",
      icon: <SiPostgresql />,
    },
    { id: "node", 
      name: "NodeJs", 
      description: "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following *hello world* example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep",
      link: "https://nodejs.org/en/about/",
      icon: <DiNodejsSmall />,
    },
    { id: "express", 
      name: "ExpressJs", 
      description: "O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. Com uma miríade de métodos utilitários HTTP e middleware a seu dispor, criar uma API robusta é rápido e fácil.",
      link: "https://expressjs.com/pt-br/",
      icon: <SiExpress />,
    }
  ]
  
  const [modalTech, setModalTech] = useState(false)
  const [tech, setTech] = useState(technologies)
  const [infoTech, setInfoTech] = useState()

  return (
    <>
    {modalTech && <TechModal infoTech={infoTech} setModalTech={setModalTech} modalTech={modalTech}/>}
    <div id="portfolio">
      <h1>José Ingleson</h1>
      <Sidebar />
      <MainContent setModalTech={setModalTech} modalTech={modalTech} tech={tech} setInfoTech={setInfoTech}/>
    </div>
    </>
  )
}

export default App
