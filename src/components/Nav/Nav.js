import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase';
import './Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <Link style={{textDecoration: 'none', color: 'white'}} className="title" to='/'><li>Low-Rent</li></Link>
                {
                    props.user ?
                    <>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/mens'><li>Men's</li></Link>
                    <Link style={{textDecoration: 'none', color: 'white'}} to='/womens'><li>Women's</li></Link>
                    <Link style={{textDecoration: 'none', color: 'white'}}to='/checkout'><li>Checkout</li></Link>
                    <li onClick={logout}>Logout</li>
                    </>
                    :
                    <li onClick={login}>Login</li>
                }
            </ul>
        </nav>
    );
}
 
export default Nav;