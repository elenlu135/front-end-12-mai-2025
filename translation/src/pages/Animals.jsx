import { useState } from 'react';

function Animals() {
    const[animals, setAnimals] = useState(['pigs', 'goats', 'sheep']);

    const kustuta = (index) => {
        animals.splice(index,1)
        setAnimals(animals.slice());
    }

    return (
        <div>
            <br />
            <div>Animals {animals.length}</div>
            {animals.length === 0 && <p>There are no animals!</p>}
            {animals.map((animal, index) => (
                <div key={index}>{animal}
                    <button onClick={() => kustuta(index)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default Animals;