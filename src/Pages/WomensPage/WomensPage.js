import ClothingSection from '../../components/ClothingSection/ClothingSection';

function WomensPage(props) {
    return (
        <div>
            <ClothingSection
                {...props}
                clothes={props.clothes}
                user={props.user}
                wishlistState={props.wishlistState}
                setWishlistState={props.setWishlistState}
                addClothingToList={props.addClothingToList}
            />
        </div>
    );
};


export default WomensPage;