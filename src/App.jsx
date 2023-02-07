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
  DiDjango,
} from 'react-icons/di';
import {
  SiTypescript,
  SiStyledcomponents,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiGit
} from 'react-icons/si'

import './styles/app.sass';
import { ProjectModal } from './components/ProjectModal/ProjectModal';

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
      description: "TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript",
      icon: <SiTypescript />,
    },
    { id: "react", 
      name: "ReactJs", 
      description: "O React (também denominado React.js ou ReactJS) é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.",
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
      icon: <DiReact />,
    },
    { id: "sc", 
      name: "Styled-components", 
      description: "Utilizando literais de modelo marcados (uma adição recente ao JavaScript) e o poder do CSS, styled-components permite que você escreva código CSS real para estilizar seus componentes. Ele também remove o mapeamento entre componentes e estilos – usar componentes como uma construção de estilo de baixo nível não poderia ser mais fácil!",
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
      description: "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto. O PostgreSQL é um dos resultados de uma ampla evolução que se iniciou com o projeto Ingres, desenvolvido na Universidade de Berkeley, Califórnia. O líder do projeto, Michael Stonebraker, um dos pioneiros dos bancos de dados relacionais, deixou a universidade em 1982 para comercializar o Ingres, porém retornou a ela logo em seguida.",
      link: "https://www.postgresql.org/",
      icon: <SiPostgresql />,
    },
    { id: "node", 
      name: "NodeJs", 
      description: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos. O runtime do Node.js é single-thread — uma única thread (chamada de Event Loop) é responsável por executar o código Javascript, sem a necessidade de criar novas threads, o que torna o código mais simples de manter. Chamadas que seriam bloqueantes, como entrada/saída, são realizadas de forma assíncrona usando a libuv.",
      link: "https://nodejs.org/en/about/",
      icon: <DiNodejsSmall />,
    },
    { id: "express", 
      name: "ExpressJs", 
      description: "O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel. Com uma miríade de métodos utilitários HTTP e middleware a seu dispor, criar uma API robusta é rápido e fácil.",
      link: "https://expressjs.com/pt-br/",
      icon: <SiExpress />,
    },
    { id: "python", 
      name: "Python", 
      description: "Traduzido do inglês-Python é uma linguagem de programação de alto nível e de uso geral. Sua filosofia de design enfatiza a legibilidade do código com o uso de recuo significativo. Python é digitado dinamicamente e coletado como lixo.",
      link: "https://www.python.org/",
      icon: <SiPython />,
    },
    {
      id: "django",
      name: "Django",
      description: "Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view. Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005.",
      link: "https://www.djangoproject.com/",
      icon: <DiDjango />
    },
    {
      id: "git",
      name: "Git",
      description: "Git ₍ₒᵤ em inglês britânico₎ é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.",
      link: "https://git-scm.com/",
      icon: <SiGit />
    }
  ]
  
  const [modalTech, setModalTech] = useState(false)
  const [tech, setTech] = useState(technologies)
  const [modalProject, setModalProject] = useState(false)
  const [infoTech, setInfoTech] = useState()

  document.onkeydown = function(e) {
    if(e.key === 'Escape') {
      setModalProject(false)
      setModalTech(false)
    }
  }

  return (
    <>
    {modalTech && <TechModal infoTech={infoTech} setModalTech={setModalTech} modalTech={modalTech}/>}
    {modalProject && <ProjectModal setModalProject={setModalProject} modalProject={modalProject}/>}
    <div id="portfolio">
      <h1>José Ingleson</h1>
      <Sidebar />
      <MainContent setModalTech={setModalTech} modalTech={modalTech} tech={tech} setInfoTech={setInfoTech} setModalProject={setModalProject} modalProject={modalProject}/>
    </div>
    </>
  )
}

export default App
