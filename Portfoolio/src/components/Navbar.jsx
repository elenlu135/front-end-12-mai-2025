
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <img className='main-picture' src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="image" />
        <div className='rectangle'></div>

        <div className='navigation-pictures'>
            <Link className='main-link' to="work">
                <img src="https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_640.jpg" alt="dices" />
            </Link>
            <Link className='main-link' to="hobbies">
                <img src="https://static4.depositphotos.com/1019811/354/i/450/depositphotos_3548170-stock-photo-wooden-dice-all-numbers.jpg" alt="dices" />
            </Link>
            <Link className='main-link' to="courses">
                <img src="https://thumbs.dreamstime.com/b/dice-7733268.jpg" alt="dices" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar