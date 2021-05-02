import { Link } from 'react-router-dom';
import CheckoutClothingCard from "../../components/CheckoutClothingCard/CheckoutClothingCard";

function Checkout(props) {
    return (
        <div className='checkout-container'>
            {props.closetState.closets.map((closet, idx) => (
                <CheckoutClothingCard
                    key={idx}
                    closet={closet}
                    clothes={props.clothes}
                    deleteClothingFromList={props.deleteClothingFromList}
                    updateClothingInList={props.updateClothingInList}
                    />
                    ))}
                    <Link className='credit' to='/credit'>Checkout</Link>
            </div>
    );
};


export default Checkout;