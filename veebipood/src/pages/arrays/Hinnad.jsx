import React from 'react'
import { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"
import ArraysHome from './ArraysHome';

// renderdamine --> väljkuvamine
// re-renderdamine --> setteriga HTMLi muutmine

// kõigepealt näeme ühte HTMLi (mis tuleb algväärtusega).
// re-renderdamisel muudetakse HTMLi muutujaid muutes.

// re-renderdamisel käiakse kogu HTML uuesti läbi, algusest lõpuni.
// renderdamisel tehakse tööd --> kuvatakse HTML välja,
// re-renderdamisel tööd ei tehta kui on teada mäluaadressid.
// React paneb automaatselt kõigile mäluaadressid, aga mitte tsükli
// sees olevatele HTML elementidele. Selle jaoks on vaja panna key=""

function Hinnad() {
    const[hinnad, setHinnad] = useState(hinnadFailist.slice());
    

    const kustutaEsimene = () => {
        hinnad.splice(0,1); //.splice() on sama nagu back endis nt .delete voi .remove
                            // .splice(alates mitmendast kustutan, mitu tk)
        setHinnad(hinnad.slice()); //.slice() --> kustutab mälukoha
    }

    const kustutaTeine = () => {
        hinnad.splice(1,1);
        setHinnad(hinnad.slice());
    }

    const kustutaKolmas = () => {
        hinnad.splice(2,1);
        setHinnad(hinnad.slice());
    }

    const kustutaNeljas = (index) => {
        hinnad.splice(index,1);
        setHinnad(hinnad.slice());
    }

    const kustuta = (index) => {
        hinnad.splice(index,1);
        setHinnad(hinnad.slice());
    }

    const sorteeriKahanevalt = () => {
        hinnad.sort((a,b) => b - a);
        setHinnad(hinnad.slice()); 
    }

    const sorteeriKasvavalt = () => {
        hinnad.sort((a,b) => a - b);
        setHinnad(hinnad.slice());
    }

    const filtreeriVaiksemadKui50 = () => {
        const vastus = hinnadFailist.filter(hind => hind < 50);
        setHinnad(vastus);
    }

    const filtreeriSuuremadKui100 = () => {
        const vastus = hinnadFailist.filter(hind => hind > 100);
        setHinnad(vastus);
    }

    // onClick={() => setHinnad([])} --> panen () => ja lõppu () kui saadan midagi kaasa
    // onClick={kustutaEsimene} --> ei pane () => ja lõppu () kui mul pole midagi saata
    // onClick={kustutaNeljas(3)} --> tekitab infinite loop errori

    return (
        <div>
            < ArraysHome />
            <br />

            <button onClick={filtreeriVaiksemadKui50}>Jäta alles väiksemad kui 50</button>
            <button onClick={filtreeriSuuremadKui100}>Jäta alles suuremad kui 100</button>
            <br /><br />
            <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
            <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
            <br /><br />
            <button onClick={() => setHinnad([])}>Tühjenda</button>
            <button onClick={kustutaEsimene}>Kustuta esimene</button>
            <button onClick={kustutaTeine}>Kustuta teine</button>
            <button onClick={kustutaKolmas}>Kustuta kolmas</button>
            <button onClick={() => kustutaNeljas(3)}>Kustuta neljas</button>
            <button onClick={() => setHinnad(hinnadFailist)}>Võta filtrid maha</button>
            <br /><br />

            <div>Kokku: {hinnad.length} tk</div>
            {hinnad.map((hind, index) => 
                <div key={hind}>
                    {hind}
                    <button onClick={() => kustuta(index)}>X</button>
                </div>)}
        </div>
    )
}

export default Hinnad