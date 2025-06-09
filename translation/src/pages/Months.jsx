import { useState } from "react"

function Months() {
    const[months, setMonths] = useState(['March', 'Jan', 'Feb', 'Dec']);
        
    const kustuta = (index) => {
        months.splice(index,1)
        setMonths(months.slice());
    }

    return (
        <div>
            <br />
            <div>Months {months.length}</div>
            {months.length === 0 && <p>There are no months!</p>}
            {months.map((month, index) => (
                <div key={index}>{month}
                    <button onClick={() => kustuta(index)}>X</button>
                </div>
            ))}
        </div>
    );
}

export default Months;