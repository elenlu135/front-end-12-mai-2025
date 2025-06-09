import './App.css'
import Books from './pages/Books'
import { Link, Route, Routes } from 'react-router-dom';
import Numbrid from './pages/Numbrid';

function App() {

  return (
    <>
      <div>
      <Link to="/books">
        <button className='nupp'>Books</button>
      </Link>

      <Link to="/numbrid">
        <button className='nupp'>Numbrid</button>
      </Link>

      <Routes>
        <Route path='/' element={
          <div>
            <h2>HTML Table</h2>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
            </table>

            <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>

            <img className='pilt' src="https://images.cartoonstock.com/lowres_800/computers-computer_user-clicks-mouse-manner-politeness-bstn853_low.jpg" alt="funny-computer-image" />
            <p className='sinineTekst'>Vajuta siia</p>
            <p className='rohelineTekst'>Vajuta siia ka</p>
            <button className='nupp'>ja siia</button>
          </div>
        }/>
      </Routes>

      <Routes>
        <Route path='/books' element={ <Books/> }></Route>
      </Routes>
      <Routes>
        <Route path='/numbrid' element={ <Numbrid/> }></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
