import './Header.css';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header>
            <p className='logo'>Study<span>Planner</span></p>
            <nav>

                <Link to="about">About</Link>
                {/* <a href="">Home</a>
                <a href="">About</a> */}
            </nav>
        </header>
    )

}
export default Header;