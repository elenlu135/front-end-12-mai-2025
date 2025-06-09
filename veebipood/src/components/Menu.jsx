import { Link, Route, Routes } from "react-router-dom";

function Menu() {

  return (
    <div>

      <Link to="/">
        <img className='pilt' src="https://as1.ftcdn.net/v2/jpg/02/36/99/22/1000_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg" alt="cat" />
      </Link>

      <Link to="/arrays-home">
        <button className='nupp'>Arrays</button>
      </Link>

      <Link to="/halda-home">
        <button className='nupp'>Halda</button>
      </Link>

      <Link to="/ostukorv">
        <button className='nupp'>Ostukorvi</button>
      </Link>

      <Link to="/osta-kinkekaart">
        <button className='nupp'>Kinkekaart</button>
      </Link>

      <Link to="/lisa-toode">
        <button className='nupp'>Lisa Toode</button>
      </Link>

      <Link to="/seaded">
        <button className='nupp'>Seaded</button>
      </Link>

      <Link to="/kalkulaator">
        <button className='nupp'>Kalkulaator</button>
      </Link>

    </div>
  )
}

export default Menu