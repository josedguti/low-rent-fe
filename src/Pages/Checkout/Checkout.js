function Checkout(props) {
    let userList = props.wishlistState.lists.find(list => list.id === props.wishlistState.userListId);
    return (
        <div>
            {userList.clothes.map((clothing, idx) => (
                <div key={idx}>
                    <p>{clothing.name}</p>
                    <p>${clothing.price}</p>
                </div>
            ))}
        </div>
    );
};


export default Checkout;