import { useState } from "react";
import joogidFailist from "../data/joogid.json";
import { useRef } from "react";

function LisaJook() {
    const [joogid, setJoogid] = useState(joogidFailist.slice());
    const lisaJookRef = useRef();

    function kustuta(index) {
        joogidFailist.splice(index,1);
        setJoogid(joogidFailist.slice());
    }

    function lisaJook() {
        joogidFailist.push(lisaJookRef.current.value);
        setJoogid(joogidFailist.slice());
        lisaJookRef.current.value = "";
    }

  return (
        <div>Joogid:
            {joogid.map((jook, index) =>
            <div>
                <span>{jook}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>
            )}
            <br />
            <label>Lisa uus jook:</label>
            <input ref={lisaJookRef} type="text" />
            <button onClick={() => lisaJook()}>Sisesta</button>
        </div>
    )
}

export default LisaJook;
