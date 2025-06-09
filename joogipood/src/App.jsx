import './App.css'
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht'
import HaldaJooke from './pages/HaldaJooke'
import LisaJooke from './pages/LisaJooke'

function App() {

  return (
    <div>
    
      <Link to="/">
        <button>Avaleht</button>        
      </Link>

      <Link to="/halda">
        <button>Halda jooke</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa jooke</button>
      </Link>

      <Routes>
        <Route path='/' element={ <Avaleht/> } />
        <Route path='/lisa' element={ <LisaJooke/> } />
        <Route path='/halda' element={ <HaldaJooke/> } />
      </Routes>
    </div>
  )
}

export default App
