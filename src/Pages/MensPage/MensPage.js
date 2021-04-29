import ClothingSection from '../../components/ClothingSection/ClothingSection';

function MensPage(props) {
    return (
        <div>
            <ClothingSection
                {...props}
                clothes={props.clothes}
            />
        </div>
    );
};


export default MensPage;