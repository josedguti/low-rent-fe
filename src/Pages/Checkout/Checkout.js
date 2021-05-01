function Checkout(props) {
    return (
        <div>
            {props.closetState.closets.map((closet, idx) => (
                <div key={idx}>
                    <p>{closet.clothes.name}</p>
                    <p>${closet.clothes.price}</p>
                    <p>Size: {closet.size}</p>
                    <p>Quantity: {closet.qty}</p>
                    <button onClick={() => props.deleteClothingFromList(closet.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};


export default Checkout;