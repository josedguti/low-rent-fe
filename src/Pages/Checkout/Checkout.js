function Checkout(props) {
    let userClosets = props.closetState.closets.filter(closet => closet.wishlist_id === props.wishlistState.userListId);

    return (
        <div>
            {userClosets.map((closet, idx) => (
                <div key={idx}>
                    <p>{closet.clothes.name}</p>
                    <p>${closet.clothes.price}</p>
                    <p>{closet.size}</p>
                    <button onClick={() => props.deleteClothingFromList(closet.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};


export default Checkout;