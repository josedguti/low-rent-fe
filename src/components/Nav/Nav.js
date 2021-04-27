import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    // Temporary to test Nav display when user is logged in or not
    let user = {
        username: 'user1',
        id: 1234
    }

    // let user = null;

    return (
        <nav>
            <ul>
                <Link to='/'><li>Home</li></Link>
                {
                    user ? // change to props.user once authentication and state are added
                    <>
                    <Link to='/mens'><li>Men's</li></Link>
                    <Link to='/womens'><li>Women's</li></Link>
                    <Link to='/checkout'><li>Checkout</li></Link>
                    <li>Logout</li>
                    </>
                    :
                    <li>Login</li>
                }
            </ul>
        </nav>
    );
}
 
export default Nav;