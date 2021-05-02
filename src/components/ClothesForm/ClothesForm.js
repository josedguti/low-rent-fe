import { useState, useEffect } from 'react';
import './ClothesForm.css';

const ClothesForm = (props) => {
    const [formState, setFormState] = useState({
        size: '',
        qty: ''
    });

    useEffect(() => {
        if (props.editFormVisible) {
            const { size, qty, id } = props.closet;
            setFormState({
                size,
                qty,
                id
            });
        }
    }, [props.editFormVisible, props.closet]);

    function handleChange(evt) {
        setFormState(prevState => ({
            ...prevState,
            [evt.target.id] : evt.target.value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.updateClothingInList(formState);
        props.toggleForm();
    }
    
    return (
        <div className="clothing-card3">
            <img className="item-image3" src={props.clothing.picture} alt={props.clothing.name}/>
            <h2>{props.clothing.name}</h2>
            <p>${props.clothing.price}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="size"> Size:
                <select name="size" id="size" value={formState.size} onChange={handleChange} >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                </select>
                </label>
                <label htmlFor="qty">
                    <input type="number" name="qty" id="qty" value={formState.qty} onChange={handleChange} />
                </label>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
}
 
export default ClothesForm;