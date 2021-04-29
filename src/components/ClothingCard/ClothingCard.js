import './ClothingCard.css';

function ClothingCard(props) {
  // Get data from each clothing card - this will be submitted to backend on form submit, currently only prints to console
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('name: ', evt.target.name.value);
    console.log('price: ', evt.target.price.value);
    console.log('description: ', evt.target.description.value);
    console.log('imagePath: ', evt.target.imagePath.value);
    console.log('size: ', evt.target.size.value);
  }

    return (
        <div className="clothing-card">
          <img className="item-image" src={props.clothing.imagePath} alt={props.clothing.name}/>
          <h2 className="item-name">{props.clothing.name}</h2>
          <p className="item-price">{`$${props.clothing.price}`}</p>
          <p className="item-description">{props.clothing.description}</p>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="name" value={props.clothing.name} />
            <input type="hidden" name="price" value={props.clothing.price} />
            <input type="hidden" name="description" value={props.clothing.description} />
            <input type="hidden" name="imagePath" value={props.clothing.imagePath} />
            <div className="button-row">
            <label className="item-size" htmlFor="size"> Size:
              <select name="size" id="size">
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
            </label>
            <input className="submit-button" type="submit" value="Add to Cart"/>
            </div>
          </form>
      </div>
    );
};


export default ClothingCard;