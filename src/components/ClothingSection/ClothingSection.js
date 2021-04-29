import ClothingCard from '../ClothingCard/ClothingCard';
import './ClothingSection.css'
const ClothingSection = (props) => {
    // find the category of where user is browsing on site
    let category = props.location.pathname.substring(1);
    category = category[0].toUpperCase() + category.substring(1);

    // filter clothing from database to only match the category
    let clothingArray = props.clothes.filter(item => item.category === category);

    return (
        <div className="clothing-section">
            {
                clothingArray.map((clothing, idx) =>
                    <ClothingCard
                        key={idx}
                        clothing={clothing}
                    />
                )
            }
        </div>
    );
}
 
export default ClothingSection;