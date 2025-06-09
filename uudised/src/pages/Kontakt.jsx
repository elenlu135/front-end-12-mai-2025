import { useState } from "react"

function Kontakt() {
  const[n2itaKristiine, muudaN2itaKristiine] = useState(false);
  const[n2itaYlemiste, muudaN2itaYlemiste] = useState(false);
  const[n2itaTasku, muudaN2itaTasku] = useState(false);


  return (
    <div>
      <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
      <div>Võta meiega ühendust:</div>
      <br />
      <div className={n2itaKristiine === true ? "valitud" : undefined} onClick={() => muudaN2itaKristiine(!n2itaKristiine)}>Kristiine Keskus</div>
      { n2itaKristiine && <div className="valitud">+372112266655</div> }
      <div>Endla 45</div>
      <br />
      <div className={n2itaYlemiste === true ? "valitud" : undefined} onClick={() => muudaN2itaYlemiste(!n2itaYlemiste)}>Ülemiste Keskus</div>
      { n2itaYlemiste && <div className="valitud">+372112266655</div> }
      <div>Suur-Sõjamäe 4</div>
      <br />
      <div className={n2itaTasku === true ? "valitud" : undefined} onClick={() => muudaN2itaTasku(!n2itaTasku)}>Tasku Keskus</div>
      { n2itaTasku && <div className="valitud">+372112266655</div> }
      <div>Turu 2</div>
    </div>
  )
}

export default Kontakt