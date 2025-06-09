// = --> anname väärtust, paremal on väärtus, vasakul, kuhu see läheb
// == --> identsuse kontroll, lisa tüübikontrollita "7" == 7 jah  "true" == true jah  
// === --> identsuse kontroll, vaatamaks kas vasak ja parem pool on täiesti sarnased
// ; --> vabatahtlik rea lõpetamise tähistus
// [] --> array, useState muutuja, teda muutev funktsioon
// () --> funktsioonidega seotud. Tehete järjekorra tekitamiseks. Tsüklis mitme muutuja tekitamiseks.
//        Kontrolli jaoks if-i sessionStorage.
//        useState () <- funktsioon       const f = () =>     function f()     onClick={() => set()}
// {} --> koodibloki tekitamiseks. HTMLs dünaamika. Objektid.
//        impordist kui tahan tükki sellest moodulist. if()
// ? : --> ternary operator. Lühendatud if/else.
// !  --> keerab vastupidi      !== ei võrdu    !true --> false
// .  --> ref.current.value --> votab tema seest mingisuguse võtme
// && --> kui on tõsi, siis tee ka parem pool
// || --> kui üks neist on tõsi, siis tee õige

// lilla --> kasklused. import, from, return, export, if, else
// helesinine --> HTMLs atribuudid: src, className, alt, onClick
//                JSs sissekirjutatud muutujad, imporditud muutujad:
//                useState, .current.value, console., localStorage.
// tavaline sinine --> muutujad: kogus, summa, laigitud, sonum
// tumesinine --> liigitus. button, div, img. const, function
// kollane --> funktsioon
// valge --> märgid &&, ===, välja näidatav tekst HTMLs
// oranz --> jutumärkides väärtus
// heleroheline --> numbriline väärtus
// tumesinine --> kahendväärtus
// tumeroheline --> kommentaar
// roheline suure tähega --> HTMLs imporditud kood

// sulud värvuvad kindlas järjekorras:
// kollane, lilla, sinine, kollane, lilla, sinine jne
// {{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}

// kommentaar ctrl + //kaob koodist ära
// Eriomadused:
// number --> kas suurem/vaiksem, korrutamine, jagamine
// string --> mis on esimene, mis on viimane, kas sisaldab jne
// boolean --> keerata väärtus tagurpidi

import { useState } from "react"


function Avaleht() {
  const[laigitud, setLaigitud] = useState(false)
  const[kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust");
  
  function nulli() {
    setKogus(0);
    setSonum("Kogus nullitud!")
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Kogus vähendatud!")
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Kogus suurendatud!")
  }

  return (
    <div>
      {laigitud === true && <img onClick={() => setLaigitud(false)} src="/laigitud.svg" alt="" />}
      {laigitud === false && <img onClick={() => setLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => setLaigitud(true)}>Laik peale</button>
      <button onClick={() => setLaigitud(false)}>Laik maha</button>

      <br />
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>

      <br/><br/>

      <div> {sonum} </div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      {/* {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>} - sama nagu ülemine */}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht