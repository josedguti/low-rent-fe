import ClothingCard from '../ClothingCard/ClothingCard';
import blackshirt from '../../img/blackshirt.jpg';
import whiteshirt from '../../img/whiteshirt.jpg';
import bluepants from '../../img/bluepants.jpg';
import blackpants from '../../img/blackpants.jpg';
import './ClothingSection.css'
const ClothingSection = () => {
    // temporary clothing data, will be updated
    const clothingArray = [{
        name: 'Black Shirt',
        price: 10.99,
        description: 'Random Blackshirt that you can use for any casual ocassion',
        imagePath: blackshirt,
    }, {
        name: 'White Shirt',
        price: 10.99,
        description: 'The white shirt is the ideal multitasker, the ultimate in simplicity and versatility',
        imagePath: whiteshirt,
    }, {
        name: 'Blue Pants',
        price: 19.99,
        description: 'Good looking pants that you can use to have dinner with friends',
        imagePath: bluepants,
    }, {
        name: 'Black Pants',
        price: 19.99,
        description: 'Pretty nice pants to use for any ocassion',
        imagePath: blackpants,
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