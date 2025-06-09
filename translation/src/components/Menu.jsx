import { Link, Route, Routes } from "react-router-dom";

function Menu() {

  return (
    <div>


      <Link to="/avaleht">
        <button className='nupp'>Avaleht</button>
      </Link>

      <Link to="/meist">
        <button className='nupp'>Meist</button>
      </Link>

      <Link to="/kontakt">
        <button className='nupp'>Kontakt</button>
      </Link>

      <Link to="/months">
        <button className='nupp'>Months</button>
      </Link>

      <Link to="/animals">
        <button className='animals'>Animals</button>
      </Link>

      <Link to="/words">
        <button className='words'>Words</button>
      </Link>

    </div>
  )
}

export default Menu