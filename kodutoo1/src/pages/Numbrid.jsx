import React from 'react'
import { useState } from 'react';

function Numbrid() {
    const[numbrid, setNumbrid] = useState ([4, 23, 7, 39, 19, 0, 9, 14, 135, 77, 13]);
    
    const sorteeriKahanevalt = () => {
        numbrid.sort((a,b) => b - a);
        setNumbrid(numbrid.slice()); 
    }

    const sorteeriKasvavalt = () => {
        numbrid.sort((a,b) => a - b);
        setNumbrid(numbrid.slice());
    }

    function sorteeriEsimeseJargi() {
        const sorted = numbrid.slice().sort((a, b) => {
            const firstA = a.toString()[0];
            const firstB = b.toString()[0];
            return firstA.localeCompare(firstB);
        });

        setNumbrid(sorted);
    }

    function sorteeriEsimeseJargiKah() {
        const sorted = numbrid.slice().sort((a, b) => {
            const firstA = a.toString()[0];
            const firstB = b.toString()[0];
            return firstB.localeCompare(firstA);
        });

        setNumbrid(sorted);
    }

    const filtreeriSuuremadKui8 = () => {
        const vastus = numbrid.filter(number => number > 8);
        setNumbrid(vastus);
    }

    const filtreeriVaiksemadKui10 = () => {
        const vastus = numbrid.filter(number => number < 10);
        setNumbrid(vastus);
    }

    function filtreeriPaaris() {
        const paaris = numbrid.filter(n => n % 2 === 0);
        setNumbrid(paaris);
    }

    function filtreeriPaaritud() {
        const paaritud = numbrid.filter(n => n % 2 !== 0);
        setNumbrid(paaritud);
    }

    function filtreeri1gaAlgavad() {
        const vastus = numbrid.filter(n => n.toString()[0] === "1");
        setNumbrid(vastus);
    }

    function filtreeriSisaldab3() {
        const vastus = numbrid.filter(n => n.toString().includes("3"));
        setNumbrid(vastus);
    }


    return (
        <div>
            <br />
                <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
                <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
                <button onClick={sorteeriEsimeseJargi}>Sorteeri esimese nr järgi kasvavas järjekorras</button>
                <button onClick={sorteeriEsimeseJargiKah}>Sorteeri esimese nr järgi kahanevas järjekorras</button>

                <button onClick={filtreeriSuuremadKui8}>Jäta alles suuremad kui 8</button>
                <button onClick={filtreeriVaiksemadKui10}>Jäta alles väiksemad kui 10</button>
                <button onClick={filtreeriPaaris}>Jäta alles paaris</button>
                <button onClick={filtreeriPaaritud}>Jäta alles paaritud</button>
                <button onClick={filtreeri1gaAlgavad}>Jäta alles 1-ga algavad</button>
                <button onClick={filtreeriSisaldab3}>Jäta alles, mis sisaldavad nr 3</button>

                <button onClick={() => setNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 135, 77, 13])}>Originaali</button>

            <div>
                <br />
                {numbrid.map(number => <div key={number}>{number}</div>)}
            </div>
        </div>
    )
}

export default Numbrid