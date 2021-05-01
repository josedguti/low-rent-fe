const CheckoutClothingCard = (props) => {
    const clothing = props.clothes.find(clothing => clothing.id === props.closet.clothes_id);
    return (
        <div>
            <p>{clothing.name}</p>
            <p>${clothing.price}</p>
            <p>Size: {props.closet.size}</p>
            <p>Quantity: {props.closet.qty}</p>
            <button onClick={() => props.deleteClothingFromList(props.closet.id)}>Delete</button>
        </div>
    );
}
 
export default CheckoutClothingCard;