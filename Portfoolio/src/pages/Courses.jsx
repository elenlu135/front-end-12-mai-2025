import { useState } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [kursus, uuendaKursus] = useState('Valimata');

  return (
    <div>
        <Link to="/">
            <button>Tagasi</button>
        </Link>
        <button className={kursus === "udemy" ? "nupp-aktiivne" : "nupp-vajutamata"} onClick={() => uuendaKursus("udemy")}>Udemy</button>
        <button className={kursus === "coursera" ? "nupp-aktiivne" : "nupp-vajutamata"} onClick={() => uuendaKursus("coursera")}>Coursera</button>
        <button className={kursus === "codeacademy" ? "nupp-aktiivne" : "nupp-vajutamata"} onClick={() => uuendaKursus("codeacademy")}>Codeacademy</button>
        <button className={kursus === "udacity" ? "nupp-aktiivne" : "nupp-vajutamata"} onClick={() => uuendaKursus("udacity")}>Udacity</button>
        {kursus === "udemy" && <div>Siin on kirjeldus (loend) Udemy.com läbitud kursustest</div>}
        {kursus === "coursera" && <div>Siin on kirjeldus (loend) Coursera.com läbitud kursustest</div>}
        {kursus === "codeacademy" && <div>Siin on kirjeldus (loend) Codeacademy.com läbitud kursustest</div>}
        {kursus === "udacity" && <div>Siin on kirjeldus (loend) Udacity.com läbitud kursustest</div>}
    </div>
  )
}

export default Courses