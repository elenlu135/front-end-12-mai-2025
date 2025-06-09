import { Route, Routes } from 'react-router-dom';
import './App.css';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';

function App() {

  return (
    <div>

      <Routes>
        <Route path='' element={ <Navbar /> } />
        <Route path='work' element={ <Work /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses /> } />
      </Routes>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-zsTVJi9j0w?si=7Eie7h3oir-aXp2b&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <a className='facebook-button' href="https://www.facebook.com/">
        <img src="/facebook.png" alt="facebook icon" />
        <span>Facebook</span>
      </a>
  
    </div>
  )
}

export default App
