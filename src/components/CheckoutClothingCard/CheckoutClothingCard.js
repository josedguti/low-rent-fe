import { useState } from 'react';
import ClothesForm from '../ClothesForm/ClothesForm';

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
            <div>
                <p>{clothing.name}</p>
                <p>${clothing.price}</p>
                <p>Size: {props.closet.size}</p>
                <p>Quantity: {props.closet.qty}</p>
                <button onClick={toggleForm}>Edit</button>
                <button onClick={() => props.deleteClothingFromList(props.closet.id)}>Delete</button>
            </div>
        }
        </>
    );
}
 
export default CheckoutClothingCard;