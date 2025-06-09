import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import Meist from './pages/Meist'
import Kontakt from './pages/Kontakt'
import Seaded from './pages/Seaded'
import Menu from './components/Menu'
import { useRef, useState } from 'react'
import Months from './pages/Months';
import Animals from './pages/Animals';
import Words from './pages/Words';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, setSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
  const parool = paroolRef.current.value;
  const kasutaja = kasutajaNimiRef.current.value;

  if (parool.length < 8) {
    toast.error("Parool on liiga lühike");
    return;
  }

  if (parool.toLowerCase() === parool) {
    toast.error("Peab sisaldama suurt tähte");
    return;
  }

  if (parool.toUpperCase() === parool) {
    toast.error("Peab sisaldama väikest tähte");
    return;
  }

  if (!parool.includes("%")) {
    toast.error("Peab sisaldama protsenti");
    return;
  }

  if (parool === "123ABC%def") {
    muudaSisselogitud("jah");
    setSonum(kasutaja + ", oled sisse logitud!");
    toast.success("Sõnum!");
    return;
  }

  setSonum("Vale parool!");
  toast.error("Sõnum");
};

  return (
    <div className='App'>
      <div>{sonum}</div>
      { sisselogitud === "ei" && <div>
        <label>Kasutajanimi</label><br />
        <input ref={kasutajaNimiRef} type="text"/><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="password"/><br />
      </div>}
      <br />
      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" && <button onClick={() => muudaSisselogitud("ei")}>Logi välja</button> }
      <br /><br />

      <div>--SIIN ON VARASEM KODUTOO--</div>
      <br />

      <Menu /> 

      <Routes>
        <Route path='/' element={ <Avaleht/> } />
        <Route path='/meist' element={ <Meist/> } />
        <Route path='/kontakt' element={ <Kontakt/> } />
        <Route path='/seaded' element={ <Seaded/> } />
        <Route path='/months' element={ <Months/> } />
        <Route path='/animals' element={ <Animals/> } />
        <Route path='/words' element={ <Words/> } />
      </Routes>
    </div>
  )
}

export default App
