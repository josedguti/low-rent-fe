import shirtImage from '../../img/shirt.png';
import ClothingCard from '../ClothingCard/ClothingCard';

const ClothingSection = () => {
    // temporary clothing data, will be updated
    const clothingArray = [{
        name: 'Black Shirt',
        price: 10.99,
        description: 'Descriptive text here...',
        imagePath: shirtImage,
    }, {
        name: 'White Shirt',
        price: 10.99,
        description: 'Descriptive text here...',
        imagePath: shirtImage,
    }, {
        name: 'Blue Pants',
        price: 19.99,
        description: 'Descriptive text here...',
        imagePath: shirtImage,
    }, {
        name: 'Black Pants',
        price: 19.99,
        description: 'Descriptive text here...',
        imagePath: shirtImage,
    }]

    return (
        <div className="clothing-section">
            {clothingArray.map((clothing, idx) =>
                <ClothingCard
                    key={idx}
                    clothing={clothing}
                />
            )}
        </div>
    );
}
 
export default ClothingSection;