import { useState } from "react"
import joogidFailist from "../data/joogid.json"

function HaldaJooke() {
    const [joogid, setJoogid] = useState(joogidFailist.slice());

    function kustuta(index) {
        joogidFailist.splice(index,1);
        setJoogid(joogidFailist.slice());
    }

    return (
        <div>Joogid:
            {joogid.map((jook, index) =>
            <div>
                <span>{jook}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>
            )}
        </div>
    )
}

export default HaldaJooke