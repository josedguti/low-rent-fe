import CheckoutClothingCard from "../../components/CheckoutClothingCard/CheckoutClothingCard";

function Checkout(props) {
    return (
        <div>
            {props.closetState.closets.map((closet, idx) => (
                <CheckoutClothingCard
                    key={idx}
                    closet={closet}
                    clothes={props.clothes}
                    deleteClothingFromList={props.deleteClothingFromList}
                    updateClothingInList={props.updateClothingInList}
                />
            ))}
        </div>
    );
};


export default Checkout;