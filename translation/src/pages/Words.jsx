import { useState } from 'react';

function Words() {
    const[words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present']);
    
    const kustuta = (index) => {
        words.splice(index,1)
        setWords(words.slice());
    }

    return (
        <div>
            <br />
            <div>Words {words.length}</div>
            {words.length === 0 && <p>There are no words!</p>}
            {words.map((word, index) => (
                <div key={index}>{word}
                    <button onClick={() => kustuta(index)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default Words;