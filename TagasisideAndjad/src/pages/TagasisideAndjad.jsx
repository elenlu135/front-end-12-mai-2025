import React, { useRef } from 'react'
import { useState } from 'react';
import nimedFailist from '../data/nimed.json'

function TagasisideAndjad() {
    const[nimed, setNimed] = useState(nimedFailist);
    const nimiRef = useRef();

    const kustuta = (index) => {
        nimed.splice(index, 1);
        setNimed(nimed.slice());
    }

    const lisa = () => {
        nimedFailist.push(nimiRef.current.value);
        setNimed(nimedFailist.slice());
        nimiRef.current.value = "";
    }


    function filtreeriEsimeneTahtOnM() {
        const filtreeritud = nimed.filter(nimi => nimi.trim().toLowerCase().startsWith("m"));
        setNimed(filtreeritud);
    }

    function filtreeriTahemargidTapselt6() {
        const filtreeritud = nimed.filter(nimi => nimi.length === 6);
        setNimed(filtreeritud);
    }

    function filtreeriViimaneTahtY() {
        const filtreeritud = nimed.filter(nimi => nimi[nimi.length - 1] === 'y');
        setNimed(filtreeritud);
    }

    function sorteeriZA() {
        nimed.sort((a,b) => b.localeCompare(a));
        setNimed(nimed.slice());
    }
    

  
    return (
        <div>
            <br />
            <div>
                <button onClick={filtreeriEsimeneTahtOnM}>Jäta alles, kus esimene täht on "M"</button>
                <button onClick={filtreeriTahemargidTapselt6}>Jäta alles, kus on 6 tähemärki</button>
                <button onClick={filtreeriViimaneTahtY}>Jäta alles, kus viimane täht on 'y'</button>
                <button onClick={sorteeriZA}>Sorteeri Z-A</button>

                <button onClick={() => setNimed(nimedFailist)}>Originaali</button>
            </div>

            <div>
            <br />
            <p>Kogus: meil on {nimed.length} nime</p>
            <br />
            <label>Lisa nimi</label><br />
            <input ref={nimiRef} type="text" /><br />
            <button onClick={lisa}>Lisa</button>

            {nimed.map((nimi, index) => (
                <div key={index}>
                    {"EST-" + nimi}
                    <button onClick={() => kustuta(index)}>X</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TagasisideAndjad