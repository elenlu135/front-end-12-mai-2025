import { useState } from "react"

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");

  return (
    <div>
      <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
      <div>Meie töötajad:</div>
      <br />
      <div>Arvo Pärt</div>
      <div>Uudisklippide taustamuusika 4</div>
      <button onClick={() => n2itaKontakt('+3721122334455')}>Võta ühendust</button>
      <br /> <br />
      <div>Kelly Sildaru</div>
      <div>Püstolreporter</div>
      <button onClick={() => n2itaKontakt('+3721345345455')}>Võta ühendust</button>
      <br /> <br />
      <div>Edward von Lõngus</div>
      <div>Uudiste Kujundamine</div>
      <button onClick={() => n2itaKontakt('+37217897664455')}>Võta ühendust</button>
      <br /> <br />
      <div>Kerli Kõiv</div>
      <div>Välisturgude Spetsialist</div>
      <button onClick={() => n2itaKontakt('+3721355543455')}>Võta ühendust</button>
      <br /> <br />
      { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  )
}

export default Meist