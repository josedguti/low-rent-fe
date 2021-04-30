function Checkout(props) {
    return (
        <div className="checkout-container">

        {      
            props.user &&
                <table>
            {props.wishlistState.userList.clothes.map((item) => ( 
                <fieldset>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </fieldset>
            ))} 
            </table>
        }
            </div>
    );
};


export default Checkout;