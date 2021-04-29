import ClothingSection from '../../components/ClothingSection/ClothingSection';

function WomensPage(props) {
    return (
        <div>
            <ClothingSection
                {...props}
                clothes={props.clothes}
            />
        </div>
    );
};


export default WomensPage;