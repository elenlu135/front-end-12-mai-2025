import React from 'react'
import { useState } from 'react';

function Books() {
    const[books, setBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejudice", "Jane Eyre"]);
    
    function sorteeriAZ() {
        books.sort((a,b) => a.localeCompare(b));
        setBooks(books.slice());
    }

    function sorteeriZA() {
        books.sort((a,b) => b.localeCompare(a));
        setBooks(books.slice());
    }

    function sorteeriTahedKasv (){
        books.sort((a,b) => a.length - b.length);
        setBooks(books.slice()); 
    }

    function sorteeriTeineTahtAZ (){
        books.sort((a,b) => a[1].localeCompare(b[1]));
        setBooks(books.slice());  
    }

    function sorteeriSonaArvKasv() {
        books.sort((a, b) => a.split(" ").length - b.split(" ").length);
        setBooks(books.slice());
    }

    function sorteeriEelviimaneTaht() {
        const vastus = books.slice().sort((a, b) => {
            const lastCharA = a[a.length - 2];
            const lastCharB = b[b.length - 2];
            return lastCharA.localeCompare(lastCharB);
        });

        setBooks(vastus);
    }

    function filtreeriSisaldabLyhenditAnd() {
        const vastus = books.filter(book => book.includes(" and "));
        setBooks(vastus);
    }

    function filtreeriThegaAlgavad() {
        const vastus = books.filter(book => book.trim().toLowerCase().startsWith("the"));
        setBooks(vastus);
    }

    function filtreeriTahemargidRohkemKui10() {
        const vastus = books.filter(book => book.length > 10);
        setBooks(vastus);
    }

    function filtreeriTahemargidVahemKui7() {
        const vastus = books.filter(book => book.length < 7);
        setBooks(vastus);
    }

    function filtreeri3SonalisedJaRohkem() {
        const vastus = books.filter(book => book.trim().split(" ").length >= 3);
        setBooks(vastus);
    }

    function filtreeriEelviimaneTahtC() {
        const vastus = books.filter(book => book[book.length - 2] === 'c');
        setBooks(vastus);
    }

    return (
        <div>
            <br />
            <div>
                <button onClick={sorteeriAZ}>Sorteeri A-Z</button>         
                <button onClick={sorteeriZA}>Sorteeri Z-A</button>
                <button onClick={sorteeriTahedKasv}>Sorteeri sõnapikkuse järgi</button>
                <button onClick={sorteeriTeineTahtAZ}>Teise tähe järgi</button>
                <button onClick={sorteeriSonaArvKasv}>Sõnade arvu järgi</button>
                <button onClick={sorteeriEelviimaneTaht}>Eelviimase tähe järgi</button>

                <button onClick={filtreeriSisaldabLyhenditAnd}>Sisaldab 'and'</button>
                <button onClick={filtreeriThegaAlgavad}>Algab sõnaga 'The'</button>
                <button onClick={filtreeriTahemargidRohkemKui10}>Rohkem kui 10 tähemärki</button>
                <button onClick={filtreeriTahemargidVahemKui7}>Vähem kui 7 tähemärki</button>
                <button onClick={filtreeri3SonalisedJaRohkem}>3 või rohkema sõnalised</button>
                <button onClick={filtreeriEelviimaneTahtC}>Eelviimane täht on 'c'</button>

                <button onClick={() => setBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride and Prejudice", "Jane Eyre"])}>Originaali</button>
            </div>

            <div>
                <br />
                {books.map(book => <div key={book}>{book}</div>)}
            </div>
        </div>
    )
}

export default Books