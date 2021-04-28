import ClothingCard from '../ClothingCard/ClothingCard';
import pinkshirt from '../../img/pinkshirt.jpg';
import blackskirt from '../../img/blackskirt.jpg';
import yellowblouse from '../../img/yellowblouse.jpg';
import jeans from '../../img/jeans.jpg';

const ClothingSection = () => {
    // temporary clothing data, will be updated
    const clothingArray = [{
        name: 'Pink Shirt',
        price: 10.99,
        description: 'Random Pinkshirt that you can use for any casual ocassion',
        imagePath: pinkshirt,
    }, {
        name: 'Black Skirt',
        price: 12.99,
        description: 'Professional skirt you could use for work or lunch',
        imagePath: blackskirt,
    }, {
        name: 'Yellow Blouse',
        price: 19.99,
        description: 'Very stylish yellow blouse to go out for dinner',
        imagePath: yellowblouse,
    }, {
        name: 'Blue Jeans',
        price: 19.99,
        description: 'Pretty nice blue jeans to use for any ocassion',
        imagePath: jeans,
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