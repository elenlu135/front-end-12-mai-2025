import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Avaleht from './pages/Avaleht';
import VaataArvuti from './pages/VaataArvuti';
import LisaArvuti from './pages/LisaArvuti';

function App() {

  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Sülearvutid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Routes>
        <Route path="" exact element={ <Avaleht/> } />
        <Route path="all" exact element={ <VaataArvuti/> } />
        <Route path="add" exact element={ <LisaArvuti/> } />
      </Routes>
    </div>
  )
}

export default App
