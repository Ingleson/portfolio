import { MainContent } from './components/MainContent/MainContent';
import { Sidebar } from './components/Sidebar/Sidebar';

import './styles/app.sass';

function App() {

  return (
    <div id="portfolio">
      <h1>José Ingleson</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
