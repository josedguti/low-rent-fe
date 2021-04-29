import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase';
import { withTheme } from 'styled-components';
import './Nav.css';

const theme = {
    main: 'white',
};

const Nav = (props) => {
    return (
    
        
        <nav>
            <Link style={{textDecoration: 'none'}} className="title" to='/'><h1>low-rent</h1></Link>
            <ul>
                <Link style={{textDecoration: 'none', color:'black' }} to='/mens'><li>Men</li></Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/womens'><li>WomXn</li></Link>
                {
                    props.user ?
                    <>
                    
                        <li className='username'>Welcome, {props.user.displayName}</li> 
                        <li><img src={props.user.photoURL} alt={props.user.displayName} /></li>
                    
                    
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