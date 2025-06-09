import { useRef, useState } from 'react'
import HaldaHome from './HaldaHome'
import tootedFailist from '../../data/tooted.json'

function HaldaTooted() {
  const[tooted, setTooted] = useState(tootedFailist.slice());
  const toodeRef = useRef();

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    setTooted(tootedFailist.slice());
  }

  const lisa = () => {
    tootedFailist.push(toodeRef.current.value);
    setTooted(tootedFailist.slice());
    toodeRef.current.value = "";
  }
  

  return (
    <div>

        < HaldaHome />
        <label>Lisa toode</label><br />
        <input ref={toodeRef} type="text" /><br />
        <button onClick={lisa}>Lisa</button>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Toode</th>
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
            {tooted.map((toode, index) => 
              <tr key={toode}>
                <td>{index}</td>
                <td>{toode}</td>
                <td><button onClick={() => kustuta(index)}>X</button></td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted