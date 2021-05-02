import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase';
import './Nav.css';


const Nav = (props) => {
    return (
    
        
        <nav>
            <Link className="title" to='/'><h1>low-rent</h1></Link>
            <ul>
                <Link to='/mens'><li>Men</li></Link>
                <Link to='/womens'><li>WomXn</li></Link>
                {
                    props.user ?
                    <>
                        <li className='username'>Welcome, {props.user.displayName}</li> 
                        <li><img src={props.user.photoURL} alt={props.user.displayName} /></li>
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