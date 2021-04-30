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
                findOrCreateList={props.findOrCreateList}
                addClothingToListList={props.addClothingToListList}
            />
        </div>
    );
};


export default WomensPage;