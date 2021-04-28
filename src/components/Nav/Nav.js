import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase';
import './Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <ul>
                {
                    props.user ?
                    <>

                    <Link style={{textDecoration: 'none', color:'black' }} to='/mens'><li>Men</li></Link>
                    <Link style={{textDecoration: 'none', color: 'black'}} to='/womens'><li>WomXn</li></Link>
                    <Link style={{textDecoration: 'none', color: 'black'}}to='/checkout'><li>Checkout</li></Link>

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