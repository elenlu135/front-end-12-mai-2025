import './App.css'
import TagasisideAndjad from './pages/TagasisideAndjad'
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
      <Link to="/tagasiside-andjad">
        <button className='nupp'>Tagasiside andjad</button>
      </Link>

      <Routes>
        <Route path='/tagasiside-andjad' element={ <TagasisideAndjad/> }></Route>
      </Routes>

      </div>
    </>
  )
}

export default App
