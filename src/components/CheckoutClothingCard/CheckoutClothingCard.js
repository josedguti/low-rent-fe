import { useState } from 'react';
import ClothesForm from '../ClothesForm/ClothesForm';
import './CheckoutClothingCard.css';

const CheckoutClothingCard = (props) => {
    const [editFormVisible, setEditFormVisible] = useState(false);

    function toggleForm() {
        setEditFormVisible(!editFormVisible)
      }

    const clothing = props.clothes.find(clothing => clothing.id === props.closet.clothes_id);
    return (
        <>
        {
            editFormVisible ? 
            <ClothesForm
                closet={props.closet}
                clothing={clothing}
                toggleForm={toggleForm}
                editFormVisible={editFormVisible}
                updateClothingInList={props.updateClothingInList}
            />
            :
            
                <div className="clothing-card2">
                    <img className="item-image2" src={clothing.picture} alt={clothing.name}/>
                    <h2 className="item-name">{clothing.name}</h2>
                    <p className="item-price">${clothing.price}</p>
                    <p className="item-description">{clothing.description}</p>
                    <p>Size: {props.closet.size}</p>
                    <p>Quantity: {props.closet.qty}</p>
                    <div className="button-row">
                        <button className="submit-button" onClick={toggleForm}>Edit</button>
                        <button className="submit-button" onClick={() => props.deleteClothingFromList(props.closet.id)}>Delete</button>
                    </div>
                </div>
            
        }
        </>
    );
}
 
export default CheckoutClothingCard;