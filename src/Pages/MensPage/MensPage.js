import ClothingSection from '../../components/ClothingSection/ClothingSection';

function MensPage(props) {
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


export default MensPage;