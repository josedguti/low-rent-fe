import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase';
import './Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                {
                    props.user ?
                    <>
                    <h1>Low-Rent</h1>
                    <Link to='/mens'><li>Men's</li></Link>
                    <Link to='/womens'><li>Women's</li></Link>
                    <Link to='/checkout'><li>Checkout</li></Link>
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