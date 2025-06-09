import { useRef, useState } from "react"

function MaksimaalneKalkulaator() {
  const[sissetulekParast, setSissetulekParast] = useState("");
  const[maksimaalneLimiit, setMaksimaalneLimiit] = useState("");
  const netoRef = useRef();
  const kohustusedRef = useRef();
    

  const arvutaSissetulekParast = () => {
      setSissetulekParast(
        Number(netoRef.current.value) - Number(kohustusedRef.current.value)
      );
      setMaksimaalneLimiit(
        ((Number(netoRef.current.value) - Number(kohustusedRef.current.value)) * 0.4) * 12 * 30
      );
  };

  return (
    <div>
        {/* nagu periood - dropdownist vaartused 1 2 3 4 */}
        <label>Ülalpeetavate arv</label> <br />
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select> <br />

        <label>Netosissetulek</label> <br />
        <input ref={netoRef} type="text" onChange={arvutaSissetulekParast} /> <br />

        <label>Igakuised kohustused</label> <br />
        <input ref={kohustusedRef} type="text" onChange={arvutaSissetulekParast} /> <br />

        <label>Sissetulek pärast kohustusi</label> <br />
        <input default value={sissetulekParast} type="text" /> <br />

        <label>Maksimaalne pakutav limiit {maksimaalneLimiit} $</label> <br />
    </div>
  )
}

export default MaksimaalneKalkulaator