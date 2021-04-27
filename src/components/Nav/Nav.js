// import { Link } from 'react-router-dom';
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
                {/* TODO - Add Link to Home, Categories, and Cart */}
                <li>Home</li>
                {
                    user ? // change to props.user once authentication and state are added
                    <>
                        <li>Men's</li>
                        <li>Women's</li>
                        <li>Cart</li>
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