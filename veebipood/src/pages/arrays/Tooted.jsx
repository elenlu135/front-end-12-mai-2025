import { useState } from 'react';
import ArraysHome from './ArraysHome'
import tootedFailist from '../../data/tooted.json'

function Tooted() {
  const[tooted, setTooted] = useState(tootedFailist.slice());

  function sorteeriAZ () {
    tooted.sort((a,b) => a.localeCompare(b));
    setTooted(tooted.slice()); 
  }

  function sorteeriZA () {
    tooted.sort((a,b) => b.localeCompare(a));
    setTooted(tooted.slice());
  }

  function sorteeriTahedKasv () {
    tooted.sort((a,b) => a.length - b.length);
    setTooted(tooted.slice());
  }

  function sorteeriTahedKah () {
    tooted.sort((a,b) => b.length - a.length);
    setTooted(tooted.slice());
  }

  function sorteeriTeineTahtAZ() {
    tooted.sort((a,b) => a[1].localeCompare(b[1]));
    setTooted(tooted.slice());
  }


  function filtreeriKuni6Tahelised() {
    const filtreeritudTulemus = tootedFailist.filter(toode => toode.length <= 6);
    setTooted(filtreeritudTulemus);
  }

  function filtreeri6Tahelised() {
    const filtreeritudTulemus = tootedFailist.filter(toode => toode.length === 6);
    setTooted(filtreeritudTulemus);
  }

  function filtreeriViimaneTahtOnA() {
    const filtreeritudTulemus = tooted.filter(toode => toode[toode.length - 1] === 'a');
    setTooted(filtreeritudTulemus);
  }

  function filtreeriViimaneTahtOnY() {
    const filtreeritudTulemus = tooted.filter(toode => toode[toode.length - 1] === 'y');
    setTooted(filtreeritudTulemus);
  }

  function filtreeriPaarisarvTahti() {
    const filtreeritudTulemus = tootedFailist.filter(toode => (toode.length) % 2 === 0);
    setTooted(filtreeritudTulemus);
  }

  return (
    <div>
      < ArraysHome />
      <p>Kogus: meil on {tooted.length} toodet</p>

      <br />

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>

      <br />

      <button onClick={filtreeriKuni6Tahelised}>Jäta alles kuni 6-tähelised</button>
      <button onClick={filtreeri6Tahelised}>Jäta alles 6-tähelised</button>
      <button onClick={filtreeriViimaneTahtOnA}>Jäta alles, kus viimane täht on "a"</button>
      <button onClick={filtreeriViimaneTahtOnY}>Jäta alles, kus viimane täht on "y"</button>
      <button onClick={filtreeriPaarisarvTahti}>Jäta alles, kus on paarisarv tähti</button>
      <button onClick={() => setTooted(tootedFailist)}>Kustuta filtrid</button>

      <br /><br />

      {tooted.map(toode => <div key={toode}>{toode}</div>)}
      
    </div>
  )
}

export default Tooted