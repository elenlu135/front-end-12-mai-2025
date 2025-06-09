import { useRef, useState } from 'react'
import HaldaHome from './HaldaHome'
import tootajadFailist from '../../data/tootajad.json'

function HaldaTootajad() {
  const[tootajad, setTootajad] = useState(tootajadFailist.slice());
  const nimiRef = useRef();

  const kustuta = (index) => {
    tootajadFailist.splice(index, 1);
    setTootajad(tootajadFailist.slice());
  }

  const lisa = () => {
    tootajadFailist.push(nimiRef.current.value);
    setTootajad(tootajadFailist.slice());
    nimiRef.current.value = "";
  }
  

  return (
    <div>

        < HaldaHome />
        <label>Lisa töötaja</label><br />
        <input ref={nimiRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Töötaja</th>
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
            {tootajad.map((tootaja, index) => 
              <tr key={tootaja}>
                <td>{index}</td>
                <td>{tootaja}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad