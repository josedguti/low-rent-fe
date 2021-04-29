import ClothingCard from '../ClothingCard/ClothingCard';
import './ClothingSection.css'
const ClothingSection = (props) => {

    return (
        <div className="clothing-section">
            {props.clothes.map((clothing, idx) =>
                <ClothingCard
                    key={idx}
                    clothing={clothing}
                />
            )}
        </div>
    );
}
 
export default ClothingSection;