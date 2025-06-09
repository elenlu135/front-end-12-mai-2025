import React, { useState } from 'react'
import Menu from '../components/Menu'

function Meist() {
  const[sonum, määraSonum] = useState("Vali mõni tegevus");

  return (
    <div>
        <div>{ sonum }</div>
        <button onClick={() => määraSonum("Selleks saada meile e-mail jobs@html-css.com")}>Kandideeri tööle</button>
        <button onClick={() => määraSonum("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal")}>Vaata meie töötajaid</button>
        <button onClick={() => määraSonum("Ühenduse võtmiseks mine lehele Kontakt")}>Võta meiega ühendust</button>

    </div>
  )
}

export default Meist