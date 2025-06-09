import { useState } from 'react';
import ArraysHome from './ArraysHome'
import tootajadFailist from '../../data/tootajad.json'

function Tootajad() {
  const[tootajad, setTootajad] = useState(tootajadFailist.slice());

  function sorteeriAZ () {
    tootajad.sort((a,b) => a.localeCompare(b));
    setTootajad(tootajad.slice()); 
  }

  function sorteeriZA () {
    tootajad.sort((a,b) => b.localeCompare(a));
    setTootajad(tootajad.slice());
  }

  function sorteeriTahedKasv () {
    tootajad.sort((a,b) => a.length - b.length);
    setTootajad(tootajad.slice());
  }

  function sorteeriTahedKah () {
    tootajad.sort((a,b) => b.length - a.length);
    setTootajad(tootajad.slice());
  }

  function sorteeriTeineTahtAZ() {
    tootajad.sort((a,b) => a[1].localeCompare(b[1]));
    setTootajad(tootajad.slice());
  }

  function sorteeriSonadArvuJargi() {
    function leiaNimedeArv(nimed) {
      const nimi = nimed.split(/[\s-]+/);
      return nimi.length
    }
    tootajad.sort(function(a,b) {
      return leiaNimedeArv(a) - leiaNimedeArv(b)
    });

    setTootajad(tootajad.slice());
  }

  function filtreeri3Tahelised() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => tootaja.length === 3);
    setTootajad(filtreeritudTulemus);
  }

  function filtreeriRohkemKui5Tahelised() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => tootaja.length > 5);
    setTootajad(filtreeritudTulemus);
  }

  function filtreeriSisaldabLyhenditAI() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => tootaja.includes('ai'));
    setTootajad(filtreeritudTulemus);
  }

  function filtreeriNeljasTahtOnI() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => tootaja[3] === "i");
    setTootajad(filtreeritudTulemus);
  }

  function filtreeriMTahegaAlgavad() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => tootaja.toLowerCase().startsWith("m"));
    setTootajad(filtreeritudTulemus);
  }

  function filtreeriPaarisarvTahti() {
    const filtreeritudTulemus = tootajadFailist.filter(tootaja => (tootaja.length) % 2 === 0);
    setTootajad(filtreeritudTulemus);
  }

  return (
    <div>
      < ArraysHome />
      <p>Kogus: meil on {tootajad.length} töötajat</p>

      <br />

      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine täht A-Z</button>
      <button onClick={sorteeriSonadArvuJargi}>Sorteeri sõnad arvu järgi</button>

      <br />

      <button onClick={filtreeri3Tahelised}>Jäta alles 3-tähelised</button>
      <button onClick={filtreeriRohkemKui5Tahelised}>Jäta alles rohkem kui 5-tähelised</button>
      <button onClick={filtreeriSisaldabLyhenditAI}>Jäta alles, mis sisaldavad lühendit "ai"</button>
      <button onClick={filtreeriNeljasTahtOnI}>Jäta alles, kus neljas täht on "I"</button>
      <button onClick={filtreeriMTahegaAlgavad}>Jäta alles, mis algab "M" tähega</button>
      <button onClick={filtreeriPaarisarvTahti}>Jäta alles, kus on paarisarv tähti</button>
      <button onClick={() => setTootajad(tootajadFailist)}>Kustuta filtrid</button>

      <br /><br />

      {tootajad.map(tootaja => <div key={tootaja}>{tootaja}</div>)}
      
    </div>
  )
}

export default Tootajad